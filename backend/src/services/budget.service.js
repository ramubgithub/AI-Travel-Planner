class BudgetService {
  estimateBudget(destination, days, budgetType) {
    const multipliers = {
      Low: {
        hotel: 40,
        food: 15,
        activities: 10
      },
      Medium: {
        hotel: 80,
        food: 30,
        activities: 25
      },
      High: {
        hotel: 180,
        food: 70,
        activities: 60
      }
    };

    const selected =
      multipliers[budgetType] ||
      multipliers.Medium;

    const flights =
      destination.toLowerCase() === "tokyo"
        ? 500
        : destination.toLowerCase() === "paris"
        ? 650
        : 400;

    const accommodation =
      selected.hotel * days;

    const food =
      selected.food * days;

    const activities =
      selected.activities * days;

    const total =
      flights +
      accommodation +
      food +
      activities;

    return {
      flights,
      accommodation,
      food,
      activities,
      total
    };
  }
}

module.exports =
  new BudgetService();