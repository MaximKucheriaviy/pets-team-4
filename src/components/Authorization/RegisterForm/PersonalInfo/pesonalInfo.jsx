export const PersonalInfo = ({ name, handleChange, handleSubmit, setPage }) => {
  return (
    <div>
      <p>personal</p>

      <label>
        Username
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter user name"
          onChange={handleChange}
        />
      </label>
      {/* <label >
       City
        <input  type="city"
  
                    name='city'
                    value={city}
                    onChange={handleChange}
                    placeholder="city" />
      </label>
      <label >
        Password
        <input type="phone"
       
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                    placeholder="phone" />
      </label> */}
      <button
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Prev
      </button>
      <button variant="outlined" onClick={() => handleSubmit()}>
        Register
      </button>
    </div>
  );
};
