import React from 'react';

const Signin = () => {
  const handleConnect = () => {
    console.log('connected');
  };

  return (
    <div className="row">
      <div className="col-xs-12 col-sn-10 col-md-8 col-sn-offset-1 col-md-offset-2 form-group">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit" onClick={handleConnect}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signin;
