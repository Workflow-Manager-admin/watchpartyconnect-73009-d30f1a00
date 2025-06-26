import React, { useState } from "react";
import Home from "./pages/Home";
import PostLoginModal from "./pages/PostLoginModal";
import CreateAccountModal from "./pages/CreateAccountModal";
import AccountProfile from "./pages/AccountProfile";
import HomeOnScroll from "./pages/HomeOnScroll";

// PUBLIC_INTERFACE
function App() {
  // Routing emulation for now (can replace with react-router if needed)
  const [route, setRoute] = useState("home");
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  // Simplified "routing" for demo (swap out for react-router for production)
  function go(r) {
    window.scrollTo(0, 0);
    setRoute(r);
    setShowLogin(false);
    setShowCreate(false);
  }

  // Map nav/etc. events to route switch
  if (showLogin)
    return (
      <>
        <Home onOpenSignUp={() => setShowCreate(true)} />
        <PostLoginModal
          open={showLogin}
          onClose={() => setShowLogin(false)}
          onSwitchSignUp={() => {
            setShowLogin(false);
            setShowCreate(true);
          }}
        />
      </>
    );

  if (showCreate)
    return (
      <>
        <Home onOpenSignUp={() => setShowCreate(true)} />
        <CreateAccountModal
          open={showCreate}
          onClose={() => setShowCreate(false)}
          onSwitchLogin={() => {
            setShowCreate(false);
            setShowLogin(true);
          }}
        />
      </>
    );

  // Choose page to render
  switch (route) {
    case "home":
      return (
        <Home
          onOpenSignUp={() => setShowCreate(true)}
        />
      );
    case "profile":
      return <AccountProfile />;
    case "scroll":
      return <HomeOnScroll onOpenSignUp={() => setShowCreate(true)} />;
    default:
      return <Home onOpenSignUp={() => setShowCreate(true)} />;
  }
}

export default App;
