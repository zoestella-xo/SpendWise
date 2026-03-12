export default function AddExpenses() {
    function handleSubmit(e){
        e.preventDefault();
        alert("Expense added successfully!");
    }

    return (
        <div class="add-expenses-form">
            <form 
                onSubmit={()=>handleSubmit()} 
                method="POST" 
                className="add-expenses-form-el"
            >
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" placeholder="eg. 50000" required />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="category">Category:</label>
                <select id="category" name="category" required>
                    <option value="">Select a category</option>
                    <option value="food">Food</option>
                    <option value="transportation">Transportation</option>
                    <option value="bills">Bills</option>
                    <option value="tithe">Tithe</option>
                    <option value="offering">Offering</option>
                    <option value="charity">Charity</option>
                    <option value="other">Others</option>
                </select>

                <button type="submit">+ADD</button>
            </form>
        </div>
    )
}