export async function run({ input, memory, tools, models, config }) {
  let attempts = 0;
  let lastError = null;

  while (attempts < config.maxRetries) {
    const route = await models.run("router", input);

    const result = await models.run("worker", {
      input,
      plan: route.plan,
      error: lastError
    });

    const validation = await models.run("validator", result);

    if (validation.status === "SUCCESS") {
      return { status: "success", output: result };
    }

    lastError = validation.reason;
    attempts++;

    await models.run("fixer", {
      error: lastError,
      previousOutput: result
    });
  }

  return {
    status: "failed",
    reason: lastError,
    escalation: "human_required"
  };
}
