import { test } from "node:test";
import assert from "node:assert/strict";
import { createSessionToken, verifySessionToken, safeEqual } from "../lib/admin/auth.ts";

const SECRET = "test-secret-0123456789-0123456789";

test("valid token round-trips", async () => {
  const t = await createSessionToken(SECRET);
  assert.equal(await verifySessionToken(SECRET, t), true);
});

test("tampered token fails", async () => {
  const t = await createSessionToken(SECRET);
  assert.equal(await verifySessionToken(SECRET, t + "x"), false);
});

test("wrong secret fails", async () => {
  const t = await createSessionToken(SECRET);
  assert.equal(await verifySessionToken("other-secret-xxxxxxxxxxxxxxxxxxxx", t), false);
});

test("expired token fails", async () => {
  const t = await createSessionToken(SECRET, -1000);
  assert.equal(await verifySessionToken(SECRET, t), false);
});

test("undefined token fails", async () => {
  assert.equal(await verifySessionToken(SECRET, undefined), false);
});

test("safeEqual basic", () => {
  assert.equal(safeEqual("abc", "abc"), true);
  assert.equal(safeEqual("abc", "abd"), false);
  assert.equal(safeEqual("abc", "abcd"), false);
});
