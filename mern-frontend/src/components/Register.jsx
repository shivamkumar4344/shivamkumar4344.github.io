export default function Register()
{
    return(
        <>
            <div className="form-container">
                <h1>Register Form</h1>
                <form action="">
                    <label htmlFor="firstName">FirstName</label><br />
                    <input type="text" name="firstName" id="firstName" />
                    <br /><br />

                    <label htmlFor="lastName">LastName</label><br />
                    <input type="text" name="lastName" id="lastName" />
                    <br /><br />

                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" />
                    <br /><br />

                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" />
                    <br /><br />
                    <button>Sumbit</button>
                </form>
            </div>
        </>
    )
}