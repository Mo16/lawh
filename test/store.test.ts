import { test } from "node:test";
import assert from "node:assert/strict";
import { isValidKey, contentPath } from "../lib/admin/store.ts";

test("known keys are valid", () => {
  assert.equal(isValidKey("site"), true);
  assert.equal(isValidKey("services"), true);
  assert.equal(isValidKey("pages/home"), true);
});

test("unknown and traversal keys are rejected", () => {
  assert.equal(isValidKey("nope"), false);
  assert.equal(isValidKey("../secrets"), false);
  assert.equal(isValidKey("pages/../../etc/passwd"), false);
  assert.equal(isValidKey(""), false);
});

test("contentPath stays under content dir", () => {
  assert.ok(contentPath("site").endsWith("/content/site.json"));
  assert.ok(contentPath("pages/home").endsWith("/content/pages/home.json"));
});
