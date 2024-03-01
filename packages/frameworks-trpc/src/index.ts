/**
 *
 * :::warning
 * `@auth/trpc` is currently experimental. The API _will_ change in the future.
 * :::
 *
 * tRPC Auth is the official tRPC integration for Auth.js.
 * It provides a simple way to add authentication to your tRPC app in a few lines of code.
 *
 * ## Installation
 * ```bash npm2yarn
 * npm install @auth/trpc
 * ```
 *
 * ## Usage
 *
 * ### Provider Configuration
 *
 * ## Signing in and signing out
 *
 * ## Managing the session
 *
 * ## Authorization
 *
 * ```
 *
 * @module @auth/trpc
 */

// Re-export types of Auth.js
export type {
  Account,
  DefaultSession,
  Profile,
  Session,
  User,
} from "@auth/core/types"

export function FrameworkAuth() {
  throw new Error("Not implemented")
}
