# Deployment Instructions for n8n Automation Builder Skill

## Deploying Workflows via n8n MCP Server API

1. Authenticate with your n8n instance using a valid API token.
2. Use the MCP Server REST API to upload or update workflows, e.g., POST `/rest/workflows` with the workflow JSON.
3. Enable the workflow for MCP access to allow remote triggering.
4. Trigger workflows programmatically via MCP Server endpoints as needed.

## Cost Optimization Tips

- Poll Instagram comments at reasonable intervals (not too frequent).
- Batch process comments to reduce API calls.
- Use conditional checks in workflows to prevent unnecessary node executions.
- Cache repeated data and minimize external requests.

## Example

Refer to `examples/comment-to-dm-workflow.json` for a sample workflow that:
- Listens for Instagram comments.
- Maps comment keywords to product costs.
- Sends DMs through ManyChat with cost or dialog.

---

Follow these practices to build scalable, efficient automations with n8n MCP Server integration.