import { useEffect, useState } from 'react';
import { useUserContext } from './../context/userContext';

export default function HomePage() {
  const { accessToken } = useUserContext();
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
    console.log("accessToken", accessToken)
    if(accessToken){
      setUserLoggedIn(true)
    }

  },[]);

  return (
    <div>HomePage
      {userLoggedIn ? (<p>hello user</p>) : (<p>log in</p>)}
    </div>
  )
}
