1. 

global state managment 
using recoil 

before we use the global state mangment 

ex) dark mode

send props App -> Router -> Coins -> Coin -> Chart 

sending the same props  so many diffrent stages , not effcient way.

global state :  share across the whole application 
but thesedays most of company people just use requct-query to deal with global state mangment


react hook form 
will let you do all the validation , onSubmit and all the extra stuff with few 
hook.



Recoil -

1. you have to have atom
import { atom } from "recoil";
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});


2. index should have 
    <RecoilRoot>


3.  const isDark = useRecoilValue(isDarkAtom);
to use the atom


4. useSetRecoilState(isDarkAtom)
this will get functino 
