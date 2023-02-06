import { createContext, useState } from "react";
import datas from "../assets/datas/rooms";
import books from "../assets/datas/users";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RoomsContext = createContext();

export const RoomsContextProvider = (props) => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(datas);
  const [users, setUsers] = useState(books);
  const [userId, setUserId] = useState();
  // console.log(users);
  const [signInForm, setSignInForm] = useState({
    username: "",
    password: "",
  });
  const [login, setLogin] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalSignIn, setModalSignIn] = useState(false);

  const [signUpForm, setSignUpForm] = useState({
    fullname: "",
    username: "",
    password: "",
    email: "",
    listAs: "",
    gender: "",
    phone: "",
    address: "",
  });

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("UserSignUp", JSON.stringify(signUpForm));
    localStorage.setItem("Roles", signUpForm.listAs);
  };

  const handleSignUpChange = (e) => {
    const updateSignUp = { ...signUpForm, [e.target.name]: e.target.value };
    setSignUpForm(updateSignUp);
  };

  const handleSignInChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };
  // const handleSignInSubmit = (e) => {
  //   e.preventDefault();
  //   // localStorage.getItem("SignIn",)
  //   // let data = [];
  //   const signUp = JSON.parse(localStorage.getItem("UserSignUp"));
  //   if (
  //     signUp.username === signInForm.username &&
  //     signUp.password === signInForm.password &&
  //     signInForm.username != "" &&
  //     signInForm.password != ""
  //   ) {
  //     console.log(signUp.username);
  //     navigate("/");
  //     alert("ok");
  //     localStorage.setItem("UserSignIn", JSON.stringify(signInForm));
  //     // setLogin(true);
  //   } else {
  //     // setLogin(true);
  //     alert("Either Username or password is wrong");
  //   }
  // };

  // const { username, password } = signUpForm;
  const localSignUpForm = localStorage.getItem("UserSignUp");
  const localSignUpForm2 = JSON.parse(localSignUpForm);

  useEffect(() => {
    // console.log(localStorage.getItem("UserSignUp"));
    // console.log(signInForm);
    // console.log(signInForm.username);
    // console.log(signInForm.password);
  }, [signInForm]);

  const filterPeriod = (periods, numBed) => {
    const filterData = rooms.filter((time) => time.period === periods);
    // filterData.filter((num) => num.bedRoom === )

    setRooms(filterData);
  };
  return (
    <RoomsContext.Provider
      value={{
        localSignUpForm2,
        rooms,
        filterPeriod,
        handleSignUpChange,
        handleSignUpSubmit,
        login,

        signInForm,
        handleSignInChange,
        users,
        navigate,
        modalSignUp,
        setModalSignUp,
        modalSignIn,
        setModalSignIn,
        userId,
        setUserId,
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};
