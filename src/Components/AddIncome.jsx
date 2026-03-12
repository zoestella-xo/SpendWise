export default function AddIncome() {
    function handleSubmit(e){
        e.preventDefault();
        
        alert("Income Added!");
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

                <label htmlFor="income-stream">Income Stream:</label>
                <input type="text" id="income-stream" name="income-stream" required/>

                <button type="submit">+ADD</button>
            </form>
        </div>
    )
}