export interface CustomError extends Error {
	status?: number;
}

export type Role = "admin" | "user";
