import React, { useState } from "react";
import Home from "./pages/Home";
import PostLoginModal from "./pages/PostLoginModal";
import CreateAccountModal from "./pages/CreateAccountModal";
import AccountProfile from "./pages/AccountProfile";
import HomeOnScroll from "./pages/HomeOnScroll";
import ScheduleWatchPartyModal from "./pages/ScheduleWatchPartyModal";
import StreamingServiceModal from "./pages/StreamingServiceModal";
import AfterSchedulingModal from "./pages/AfterSchedulingModal";
import ProfileAfterScheduling from "./pages/ProfileAfterScheduling";

// PUBLIC_INTERFACE
function App() {
  // Routing emulation for now (can replace with react-router if needed)
  const [route, setRoute] = useState("home");
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  // NEW state for demo/modal flows
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showStreamingModal, setShowStreamingModal] = useState(false);
  const [showAfterScheduling, setShowAfterScheduling] = useState(false);
  const [showProfileAfterScheduled, setShowProfileAfterScheduled] = useState(false);

  // For demo, store party details in state for profile/confirmation, production would fetch
  const [partyDetails, setPartyDetails] = useState({
    title: "Barbie (2023)",
    date: "May 4, 2024",
    time: "8:00pm",
    image: null
  });

  // Routing navigation
  function go(r) {
    window.scrollTo(0, 0);
    setRoute(r);
    setShowLogin(false);
    setShowCreate(false);
    setShowScheduleModal(false);
    setShowStreamingModal(false);
    setShowAfterScheduling(false);
    setShowProfileAfterScheduled(false);
  }

  // Map events to modal/state switch (Home/Login/Register overlays)
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

  // Modal flows for watch party scheduling
  if (showScheduleModal)
    return (
      <>
        <AccountProfile />
        <ScheduleWatchPartyModal
          open={showScheduleModal}
          onClose={() => setShowScheduleModal(false)}
          onComplete={partyInfo => {
            setShowScheduleModal(false);
            setTimeout(() => setShowStreamingModal(true), 200);
            // In full app: setPartyDetails(partyInfo)
          }}
        />
      </>
    );

  if (showStreamingModal)
    return (
      <>
        <AccountProfile />
        <StreamingServiceModal
          open={showStreamingModal}
          onClose={() => setShowStreamingModal(false)}
          onSubmit={service => {
            setShowStreamingModal(false);
            setTimeout(() => setShowAfterScheduling(true), 200);
            // In full app: setPartyDetails(prev => ({ ...prev, service }));
          }}
        />
      </>
    );

  if (showAfterScheduling)
    return (
      <>
        <AccountProfile />
        <AfterSchedulingModal
          open={showAfterScheduling}
          onClose={() => {
            setShowAfterScheduling(false);
            setTimeout(() => setShowProfileAfterScheduled(true), 200);
          }}
          onEdit={() => {
            setShowAfterScheduling(false);
            setTimeout(() => setShowScheduleModal(true), 200);
          }}
          party={partyDetails}
        />
      </>
    );

  if (showProfileAfterScheduled)
    return (
      <ProfileAfterScheduling
        onEditParty={() => setShowScheduleModal(true)}
        onShowSchedule={() => setShowScheduleModal(true)}
        party={partyDetails}
      />
    );

  // Choose page to render (core navigation + onOpenSignUp routing for registration demo)
  switch (route) {
    case "home":
      return (
        <Home
          onOpenSignUp={() => setShowCreate(true)}
        />
      );
    case "profile":
      return (
        <AccountProfile
          onScheduleWatchParty={() => setShowScheduleModal(true)}
        />
      );
    case "scroll":
      return <HomeOnScroll onOpenSignUp={() => setShowCreate(true)} />;
    case "after-schedule":
      return (
        <ProfileAfterScheduling
          onEditParty={() => setShowScheduleModal(true)}
          onShowSchedule={() => setShowScheduleModal(true)}
        />
      );
    default:
      return <Home onOpenSignUp={() => setShowCreate(true)} />;
  }
}

export default App;
