import { useState, useCallback } from "react";
import RoleSelection from "./components/RoleSelection";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import MidshipmanDashboard from "./components/MidshipmanDashboard";
import MidshipmanScenarios from "./components/MidshipmanScenarios";
import MidshipmanSkillsProfile from "./components/MidshipmanSkillsProfile";
import MidshipmanPhysicalDevelopment from "./components/MidshipmanPhysicalDevelopment";
import MidshipmanMentor from "./components/MidshipmanMentor";
import ScenariosPage from "./components/ScenariosPage";
import StudentsPage from "./components/StudentsPage";
import StudentDetailsPage from "./components/StudentDetailsPage";
import ScenarioDetailsPage from "./components/ScenarioDetailsPage";
import { ScenarioCreationNew } from "./components/ScenarioCreationNew";
import AssignmentsPage from "./components/AssignmentsPage";
import AssignmentDetailsPage from "./components/AssignmentDetailsPage";
import {
  AssignmentCreation,
  type CreatedAssignment,
} from "./components/AssignmentCreation";
import { AnalyticsPage } from "./components/AnalyticsPage";
import { MissionScreen } from "./components/MissionScreen";
import { FeedbackScreen } from "./components/FeedbackScreen";
import { ExternalMissionScreen } from "./components/ExternalMissionScreen";
import ElevenLabsWidget from "./components/ElevenLabsWidget";

type View =
  | "role-selection"
  | "midshipman-dashboard"
  | "midshipman-scenarios"
  | "midshipman-skills"
  | "midshipman-physical"
  | "midshipman-scenario-details"
  | "midshipman-mentor"
  | "mission"
  | "feedback"
  | "dashboard"
  | "scenarios"
  | "scenario-details"
  | "students"
  | "student-details"
  | "scenario-creation"
  | "assignments"
  | "assignment-details"
  | "assignment-creation"
  | "analytics";
type UserRole = "instructor" | "midshipman" | null;

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [currentView, setCurrentView] =
    useState<View>("role-selection");
  const [selectedStudentId, setSelectedStudentId] = useState<
    string | null
  >(null);
  const [selectedScenarioId, setSelectedScenarioId] = useState<
    string | null
  >(null);
  const [selectedAssignmentId, setSelectedAssignmentId] =
    useState<string | null>(null);
  const [createdAssignments, setCreatedAssignments] = useState<
    CreatedAssignment[]
  >([]);

  // Scenario titles map
  const SCENARIO_TITLES: Record<string, string> = {
    "11": "The Flight Test",
    "12": "The Quick Decision",
    "13": "The Difficult Conversation",
    "14": "The Accountability Question",
    "1": "The Authority Question",
    "2": "The Launch Decision",
    "3": "Inside the Wire",
    "4": "The Dark Hours",
    "5": "The Moral Roadmap",
    "6": "2 AM Courage",
    "7": "The Loyalty Test",
    "8": "Character in Crisis",
    "9": "Abu Ghraib Echo",
    "10": "Pressure Point",
  };

  // External mission URLs - keeping stable references
  const EXTERNAL_MISSION_URLS: Record<string, string> = {
    "3": "https://training.digitalhumans.com/immersive-training/conversation/d7a69a84-b002-4a57-b249-4c3008cd469b?locale=en-US:en-GB:en-AU:en-IN",
    "11": "https://training.digitalhumans.com/immersive-training/conversation/a1f0587c-79c4-4921-ad60-bf7475208c4f?locale=en-US:en-GB:en-AU:en-IN",
  };

  const handleRoleSelection = (
    role: "instructor" | "midshipman",
  ) => {
    setUserRole(role);
    if (role === "instructor") {
      setCurrentView("dashboard");
    } else {
      setCurrentView("midshipman-dashboard");
    }
  };

  const handleLogoClick = () => {
    setUserRole(null);
    setCurrentView("role-selection");
  };

  const handleSignOut = () => {
    setUserRole(null);
    setCurrentView("role-selection");
    setSelectedStudentId(null);
    setSelectedScenarioId(null);
    setSelectedAssignmentId(null);
    setCreatedAssignments([]);
  };

  const handleTabChange = (
    tab:
      | "dashboard"
      | "scenarios"
      | "students"
      | "assignments"
      | "analytics",
  ) => {
    setCurrentView(tab);
  };

  const handleMidshipmanTabChange = (tab: string) => {
    if (tab === "dashboard") {
      setCurrentView("midshipman-dashboard");
    } else if (tab === "scenarios") {
      setCurrentView("midshipman-scenarios");
    } else if (tab === "skills") {
      setCurrentView("midshipman-skills");
    } else if (tab === "physical") {
      setCurrentView("midshipman-physical");
    } else if (tab === "mentor") {
      setCurrentView("midshipman-mentor");
    }
  };

  const handleMidshipmanScenarioClick = (
    scenarioId: string,
  ) => {
    setSelectedScenarioId(scenarioId);
    setCurrentView("midshipman-scenario-details");
  };

  const handleBackToMidshipmanScenarios = () => {
    setCurrentView("midshipman-scenarios");
    setSelectedScenarioId(null);
  };

  const handleMidshipmanMentorClick = () => {
    setCurrentView("midshipman-mentor");
  };

  const handleBackFromMentor = () => {
    setCurrentView("midshipman-dashboard");
  };

  const handleCreateScenario = () => {
    setCurrentView("scenario-creation");
  };

  const handleCancelScenarioCreation = () => {
    setCurrentView("dashboard");
  };

  const handleSaveScenario = () => {
    setCurrentView("scenarios");
  };

  const handleAssignScenario = () => {
    setCurrentView("scenarios");
  };

  const handleMidshipmanClick = (midshipmanId: string) => {
    setSelectedStudentId(midshipmanId);
    setCurrentView("student-details");
  };

  const handleBackToMidshipmen = () => {
    setCurrentView("students");
    setSelectedStudentId(null);
  };

  const handleScenarioClick = (scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
    setCurrentView("scenario-details");
  };

  const handleBackToScenarios = () => {
    setCurrentView("scenarios");
    setSelectedScenarioId(null);
  };

  const handleTestScenario = () => {
    // Navigate to mission view
    setCurrentView("mission");
  };

  const handleEndMission = useCallback(() => {
    // Navigate to feedback screen
    setCurrentView("feedback");
  }, []);

  const handleBackFromFeedback = () => {
    // Navigate back to scenario details based on user role
    if (userRole === "midshipman") {
      setCurrentView("midshipman-scenario-details");
    } else {
      setCurrentView("scenario-details");
    }
  };

  const handleTryAnotherScenario = () => {
    // Navigate to scenarios page based on user role
    if (userRole === "midshipman") {
      setCurrentView("midshipman-scenarios");
    } else {
      setCurrentView("scenarios");
    }
    setSelectedScenarioId(null);
  };

  const handleAssignmentClick = (assignmentId: string) => {
    setSelectedAssignmentId(assignmentId);
    setCurrentView("assignment-details");
  };

  const handleBackToAssignments = () => {
    setCurrentView("assignments");
    setSelectedAssignmentId(null);
  };

  const handleCreateAssignment = () => {
    setCurrentView("assignment-creation");
  };

  const handleCancelAssignmentCreation = () => {
    setCurrentView("assignments");
  };

  const handleSaveAssignment = () => {
    setCurrentView("assignments");
  };

  const handleLaunchAssignment = (
    assignment: CreatedAssignment,
  ) => {
    // Store the assignment ID and navigate to the assignment details page
    console.log("Assignment launched:", assignment);
    setSelectedAssignmentId(assignment.id);
    setCurrentView("assignment-details");
    setCreatedAssignments([...createdAssignments, assignment]);
  };

  return (
    <div className="min-h-screen bg-[#f6f6fb] flex flex-col">
      {/* Role Selection Screen */}
      {currentView === "role-selection" && (
        <RoleSelection onSelectRole={handleRoleSelection} />
      )}

      {/* Midshipman Dashboard */}
      {currentView === "midshipman-dashboard" && (
        <MidshipmanDashboard
          onLogoClick={handleLogoClick}
          onTabChange={handleMidshipmanTabChange}
          onMentorClick={handleMidshipmanMentorClick}
          onSignOut={handleSignOut}
        />
      )}

      {/* Midshipman Scenarios */}
      {currentView === "midshipman-scenarios" && (
        <MidshipmanScenarios
          onLogoClick={handleLogoClick}
          onTabChange={handleMidshipmanTabChange}
          onScenarioClick={handleMidshipmanScenarioClick}
          onMentorClick={handleMidshipmanMentorClick}
          onSignOut={handleSignOut}
        />
      )}

      {/* Midshipman Skills Profile */}
      {currentView === "midshipman-skills" && (
        <MidshipmanSkillsProfile
          onLogoClick={handleLogoClick}
          onTabChange={handleMidshipmanTabChange}
          onSignOut={handleSignOut}
        />
      )}

      {/* Midshipman Physical Development */}
      {currentView === "midshipman-physical" && (
        <MidshipmanPhysicalDevelopment
          onLogoClick={handleLogoClick}
          onTabChange={handleMidshipmanTabChange}
          onSignOut={handleSignOut}
        />
      )}

      {/* Midshipman Mentor */}
      {currentView === "midshipman-mentor" && (
        <MidshipmanMentor
          onLogoClick={handleLogoClick}
          onTabChange={handleMidshipmanTabChange}
          onBack={handleBackFromMentor}
          onScenarioClick={handleMidshipmanScenarioClick}
          onSignOut={handleSignOut}
        />
      )}

      {/* Midshipman Scenario Details */}
      {currentView === "midshipman-scenario-details" &&
        selectedScenarioId && (
          <ScenarioDetailsPage
            scenarioId={selectedScenarioId}
            onBack={handleBackToMidshipmanScenarios}
            onAssignScenario={() => {}}
            onTestScenario={handleTestScenario}
            isMidshipman={true}
            onLogoClick={handleLogoClick}
            onTabChange={handleMidshipmanTabChange}
          />
        )}

      {/* Midshipman Feedback Screen */}
      {userRole === "midshipman" &&
        currentView === "feedback" &&
        selectedScenarioId && (
          <FeedbackScreen
            scenarioTitle={
              SCENARIO_TITLES[selectedScenarioId] ||
              "The Inner Ring"
            }
            userName="PEARSON"
            userInitials="CM"
            role="midshipman"
            onBack={handleBackFromFeedback}
            onTryAnother={handleTryAnotherScenario}
            onTabChange={handleMidshipmanTabChange}
          />
        )}

      {/* Mission Screen - accessible to both instructor and midshipman */}
      {currentView === "mission" &&
        selectedScenarioId &&
        (selectedScenarioId in EXTERNAL_MISSION_URLS ? (
          <ExternalMissionScreen
            title={
              SCENARIO_TITLES[selectedScenarioId] ||
              "Milgram Obedience"
            }
            url={EXTERNAL_MISSION_URLS[selectedScenarioId]}
            onEndMission={handleEndMission}
          />
        ) : (
          <MissionScreen
            scenarioTitle="COMMAND CLIMATE \\ REPORTING MISCONDUCT"
            courseCode="NE-203"
            userName="PEARSON"
            role={userRole || "midshipman"}
            onEndMission={handleEndMission}
          />
        ))}

      {/* Instructor Views */}
      {userRole === "instructor" &&
        currentView !== "role-selection" && (
          <>
            {currentView !== "scenario-creation" &&
              currentView !== "assignment-creation" &&
              currentView !== "mission" && (
                <div className="sticky top-0 h-[78px] z-10">
                  <Header
                    currentTab={
                      currentView === "dashboard"
                        ? "dashboard"
                        : currentView === "scenarios" ||
                            currentView ===
                              "scenario-details" ||
                            currentView === "feedback"
                          ? "scenarios"
                          : currentView === "students" ||
                              currentView === "student-details"
                            ? "students"
                            : currentView === "analytics"
                              ? "analytics"
                              : "assignments"
                    }
                    onTabChange={handleTabChange}
                    onCreateClick={handleCreateScenario}
                    onLogoClick={handleLogoClick}
                    onSignOut={handleSignOut}
                  />
                </div>
              )}

            {currentView === "dashboard" && (
              <Dashboard
                onCreateScenario={handleCreateScenario}
                onAssignScenario={handleAssignScenario}
                onTabChange={handleTabChange}
              />
            )}

            {currentView === "scenarios" && (
              <ScenariosPage
                onCreateScenario={handleCreateScenario}
                onScenarioClick={handleScenarioClick}
              />
            )}

            {currentView === "students" && (
              <StudentsPage
                onStudentClick={handleMidshipmanClick}
              />
            )}

            {currentView === "student-details" &&
              selectedStudentId && (
                <StudentDetailsPage
                  studentId={selectedStudentId}
                  onBack={handleBackToMidshipmen}
                  onAssignScenario={handleAssignScenario}
                />
              )}

            {currentView === "scenario-details" &&
              selectedScenarioId && (
                <ScenarioDetailsPage
                  scenarioId={selectedScenarioId}
                  onBack={handleBackToScenarios}
                  onAssignScenario={handleAssignScenario}
                  onTestScenario={handleTestScenario}
                />
              )}

            {currentView === "scenario-creation" && (
              <ScenarioCreationNew
                onCancel={handleCancelScenarioCreation}
                onSave={handleSaveScenario}
                onTestScenario={() => {}}
              />
            )}

            {currentView === "assignments" && (
              <AssignmentsPage
                onAssignmentClick={handleAssignmentClick}
                onCreateAssignment={handleCreateAssignment}
              />
            )}

            {currentView === "assignment-details" &&
              selectedAssignmentId && (
                <AssignmentDetailsPage
                  assignmentId={selectedAssignmentId}
                  onBack={handleBackToAssignments}
                  createdAssignment={createdAssignments.find(
                    (a) => a.id === selectedAssignmentId,
                  )}
                />
              )}

            {currentView === "assignment-creation" && (
              <AssignmentCreation
                onCancel={handleCancelAssignmentCreation}
                onSave={handleSaveAssignment}
                onLaunch={handleLaunchAssignment}
              />
            )}

            {currentView === "analytics" && <AnalyticsPage />}

            {/* Feedback Screen for Instructor */}
            {currentView === "feedback" &&
              selectedScenarioId && (
                <FeedbackScreen
                  scenarioTitle={
                    SCENARIO_TITLES[selectedScenarioId] ||
                    "The Inner Ring"
                  }
                  userName="PEARSON"
                  userInitials="CM"
                  role="instructor"
                  onBack={handleBackFromFeedback}
                  onTryAnother={handleTryAnotherScenario}
                  onTabChange={handleTabChange}
                />
              )}
          </>
        )}

      {/* ElevenLabs AI Coach Widget - Instructor */}
      {userRole === "instructor" &&
        currentView !== "role-selection" && (
          <ElevenLabsWidget agentId="agent_1801kew39j9ye8jtv09ar8sadc00" />
        )}
    </div>
  );
}