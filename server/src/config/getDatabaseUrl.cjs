const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/event_planning_development",
      test: "postgres://postgres:postgres@localhost:5432/event_planning_test",
      e2e: "postgres://postgres:postgres@localhost:5432/event_planning_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
