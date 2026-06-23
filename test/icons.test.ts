import { test } from "node:test";
import assert from "node:assert/strict";
import { getIcon, ICON_NAMES } from "../lib/icons.ts";

test("known icon resolves to a component", () => {
  assert.equal(typeof getIcon("Flame"), "object");
});

test("unknown icon falls back, never throws", () => {
  assert.doesNotThrow(() => getIcon("DoesNotExist"));
});

test("ICON_NAMES includes the service icons", () => {
  for (const n of ["Flame", "Wrench", "RefreshCw", "ShieldCheck", "Zap", "Settings", "AlertTriangle"]) {
    assert.ok(ICON_NAMES.includes(n), `${n} missing`);
  }
});
