import type { TLimitsSchema } from './schema';

export const FREE_PLAN_LIMITS: TLimitsSchema = {
  documents: 5,
  recipients: 10,
};

export const TEAM_PLAN_LIMITS: TLimitsSchema = {
  documents: Infinity,
  recipients: Infinity,
};

export const SELFHOSTED_PLAN_LIMITS: TLimitsSchema = {
  documents: Infinity,
  recipients: Infinity,
};
