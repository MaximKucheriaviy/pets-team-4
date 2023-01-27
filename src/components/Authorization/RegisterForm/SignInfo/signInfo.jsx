export const SignInfo = ({handleSubmit, email, password, handleChange, confirmPassword}, setPage) => {
    return (
        <div>

            <p>sign</p>
       
     <label>
        Email
        <input  type="email"
  
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter user email" />
      </label>
      <label >
        Password
        <input type="password"
       
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter user password" />
      </label>
           
             <label >
       confirmPassword
        <input type="password"
     
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="confirmPassword"
                    onChange={handleChange}/>
      </label>
    
          
           
         </div>
     )
}