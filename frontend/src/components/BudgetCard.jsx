import "../styles/budgetCard.css";

function BudgetCard({ budget }) {
  if (!budget) return null;

  return (
    <div className="budget-card">

      <h2>Estimated Budget</h2>

      <div className="budget-items">

        <div className="budget-item">
          <span>Flights</span>
          <span>${budget.flights}</span>
        </div>

        <div className="budget-item">
          <span>Accommodation</span>
          <span>${budget.accommodation}</span>
        </div>

        <div className="budget-item">
          <span>Food</span>
          <span>${budget.food}</span>
        </div>

        <div className="budget-item">
          <span>Activities</span>
          <span>${budget.activities}</span>
        </div>

      </div>

      <div className="total-budget">
        <span>Total Estimated Budget</span>
        <span>${budget.total}</span>
      </div>

    </div>
  );
}

export default BudgetCard;