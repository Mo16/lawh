import { test } from "node:test";
import assert from "node:assert/strict";
import { readContent } from "../lib/admin/store.ts";

test("site.json has required fields", async () => {
  const site = await readContent("site");
  assert.equal(typeof site.name, "string");
  assert.equal(typeof site.phone, "string");
  assert.equal(typeof site.rating, "number");
});

test("services.json is a non-empty array with string icons", async () => {
  const services = await readContent("services");
  assert.ok(Array.isArray(services) && services.length > 0);
  assert.equal(typeof services[0].icon, "string");
  assert.equal(typeof services[0].slug, "string");
});
