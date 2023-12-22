import React, { useEffect } from 'react';
import { auth, googleProvider, signInWithRedirect, getRedirectResult } from './Firebase';
import './Login.css'

const Login = () => {
  useEffect(() => {
    console.log('useEffect is running');

    const handleRedirect = async () => {
        try {
          const result = await getRedirectResult(auth);
      
          console.log('Redirect result:', result);
      
          if (result !== null) {
            if (result.user) {
              // Access the user information if needed
              console.log('User information:', result.user);
              // Navigate to the new page upon successful authentication
              window.location.href = '/new-page';
            } else {
              console.error('No user information found in the redirect result');
            }
          } else {
            console.error('Redirect result is null');
          }
        } catch (error) {
          console.error('Authentication error', error);
        }
      };
      
      

    handleRedirect();
  }, []);

  const handleLogin = () => {
    try {
      signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error('Authentication error', error);
    }
  };

  return (
    <div id='page2'>
        <div id='header2'>
     <h2>fiXit</h2>
      <button onClick={handleLogin}>Login</button>
      </div>
      <div id='text'>
      <div id='text2'>
      <div id='text1'>
      <span>F</span>
    <span>i</span>
    <span>x</span>
    <span>&nbsp;</span> 
    <span>y</span>
    <span>o</span>
    <span>u</span>
    <span>r</span>
    <span>&nbsp;</span> 
    <span>S</span>
    <span>a</span>
    <span>l</span>
    <span>e</span>
    <span>s</span>
      </div>   
      <span>E</span>
    <span>n</span>
    <span>a</span>
    <span>b</span>
    <span>l</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
    <span>&nbsp; </span> 
    <span>H</span>
    <span>u</span>
    <span>m</span>
    <span>a</span>
    <span>n</span>
    <span> &nbsp;</span> 
    <span>I</span>
    <span>n</span>
    <span>t</span>
    <span>e</span>
    <span>l</span>
    <span>l</span>
    <span>i</span>
    <span>g</span>
    <span>e</span>
    <span>n</span>
    <span>c</span>
    <span>e</span>
    <span>&nbsp; </span>
    <span>w</span>
    <span>i</span>
    <span>t</span>
    <span>h</span>
    <span> &nbsp;</span> 
    <span> &nbsp;</span> 
    <span> &nbsp;</span>
    <span>A</span>
    <span>r</span>
    <span>t</span>
    <span>i</span>
    <span>f</span>
    <span>i</span>
    <span>c</span>
    <span>i</span>
    <span>a</span>
    <span>l</span>
    <span>&nbsp;</span>
    <span>I</span>
    <span>n</span>
    <span>t</span>
    <span>e</span>
    <span>l</span>
    <span>l</span>
    <span>i</span>
    <span>g</span>
    <span>e</span>
    <span>n</span>
    <span>c</span>
    <span>e</span>
      </div>
      </div>
    </div>
  );
};

export default Login;
