import { FileUploadStatusTypes } from "../../../skill-ed-web/src/constants/constants";
import { Article, ICourseDetails } from "../../../skill-ed-web/src/supabaseServices/extraModels";
import {
  Course,
  Discussion,
  EnrolledCourse,
  Institution,
  Quiz,
  QuizScore,
  RubricCriteria,
  RubricCriteriaEvaluation,
  User,
} from "../../../skill-ed-web/src/supabaseServices/models";
import { UserMeta } from "./apiModels";

export interface Discussion_Item extends Discussion {
  users: User;
}

export interface FileUploadStatus {
  open: boolean;
  status: FileUploadStatusTypes | "";
  type: "file" | "url" | "";
}

export interface ArticleDetails extends Article {
  users: User;
}

export interface EnrolledCourseDetails extends EnrolledCourse {
  course: ICourseDetails;
}

export interface IEnrolledCourse extends EnrolledCourse {
  course: ICourseDetails;
  author: User;
}

export interface RubricEvaluationCriteriaDetails extends RubricCriteriaEvaluation {
  rubric_criteria: RubricCriteria;
}

export interface AssessmentData {
  "Design Thinking": number;
  "Prototype Basics": number;
  "Low Fidelity Prototype": number;
  UI: number;
  Figma: number;
  "Tools & Materials": number;
  Arduino: number;
  Electronics: number;
  OnShape: number;
  "3D Printing": number;
  "Laser Cutting": number;
  "Prototype Application": number;
}

export interface MilestoneMap {
  [milestone_id: string]: {
    communication: number;
    professional_appearance: number;
    solution: number;
    presentation: number;
    prototype: number;
    case_study: number;
  };
}

export interface MilestoneOrder {
  [milestone_number: number]: string;
}

export interface CourseQuizScores extends Quiz {
  quiz_scores: QuizScore;
}

export interface RubricEvaluationCriteriaDetails extends RubricCriteriaEvaluation {
  rubric_criteria: RubricCriteria;
}

export interface SkillMap {
  tag: string;
  value: number;
}

export interface SkillMapResponseData {
  pre_assessment_data: SkillMap[];
  post_assessment_data: SkillMap[];
}

export interface UserDetails {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  cohort_id: string;
  family_income: string;
  designation: string;
  certified_course: string[];
  has_taken_entrepreneurship_course: string;
  has_managed_people: string;
  has_pitched_idea: string;
  additional_activities: string[];
  has_family_buisiness: string;
  has_talked_about_business: string;
  family_support: string;
  personal_nature: string;
  intern: string;
}

export interface BrlContent {
  id: number;
  component: JSX.Element;
  required: boolean;
  title: string;
  disabled: boolean;
  subHeading?: string;
}

export interface PassionChecklist {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: any;
  cohort_id: string;
  question: string;
  question_number: number;
  response: PassionChecklistResponse[];
  negotiable: boolean;
  correct_choice: string;
}

export interface PassionChecklistResponse {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  question_id: string;
  response: string;
  cohort_id: string;
}

export interface StatementOfPurpose {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  knowledge: string;
  capabilities: string;
  connections: string;
  financial_assets: string;
  past_work: string;
  passion: string;
  cohort_id: string;
}

export interface TeamMembersDetail {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  team_member_id: string;
  relation: string;
  cohort_id: string;
  passion: string;
  knowledge: string;
  skills: string;
  team_potential: string;
}

export interface IdeaSubmission {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  what: string;
  urgency: string;
  why_us: string;
  passion: string;
  cohort_id: string;
}

export interface TechnologyPush {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  what: string;
  leap_forward: string;
  why_us: string;
  passion: string;
  cohort_id: string;
}

export interface HybridIdea {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  market_pull: string;
  technical_push: string;
  why_us: string;
  cohort_id: string;
}

export interface Bmc {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  cohort_id: string;
  customer_segments: string;
  value_proposition: string;
  revenue_streams: string;
  channels: string;
  customer_relationships: string;
  key_activities: string;
  key_resources: string;
  key_partners: string;
  cost_structure: string;
}

export interface Team {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  name: string;
  thumbnail: string;
  team_meta: object;
  sdgs: string[];
}

export interface BrlStatus {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  cohort_id: string;
  student_id: string;
  status: string;
}

export interface SelfTest {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  cohort_id: string;
  serial_id: number;
  question: string;
  type: string;
  code: string;
  question_number: number;
  min_score: number;
  response: SelfTestResponse[];
  options: SelfTestOption[];
}

export interface SelfTestResponse {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  cohort_id: string;
  serial_id: number;
  question_id: string;
  student_id: string;
  response_id: string;
}

export interface SelfTestOption {
  id: string;
  updated_at: string;
  created_at: string;
  created_by: string;
  serial_id: number;
  question_id: string;
  option: string;
  score: number;
  option_number: number;
}
export interface PeerTeamDetails {
  course_id: string;
  course_title: string;
  batch_id: string;
  batch_title: string;
  team_id: string;
  team_name: string;
  members: {
    member_id: string;
    email: string;
    name: string;
    display_name: string;
  }[];
}

export interface PeerEvaluationResponses {
  tag: string;
  sum: number;
  average: number;
}

export interface UserWithSingleUserMeta extends User {
  user_meta: UserMeta;
}

export interface UserWithSingleUserMetaAndInstitution extends User {
  user_meta: UserMetaWithInstitution;
}

export interface UserMetaWithInstitution extends UserMeta {
  institutions: Institution;
}

export interface FormResponse {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  form_id: string;
  form_question_id: string;
  choices: string[];
  value: string[];
  type: string;
  form_meta: any;
  created_by: string;
  index: number;
}

export interface FileUploadDetails {
  open: boolean;
  status: FileUploadStatusTypes | "";
  type: "file" | "url" | "";
}

export interface FileSelects {
  event?: any;
  link?: string;
}

export interface UserSessionUploadDto {
  type: string;
  name: string;
  url: string;
  assignment_id: string;
  file: any;
}

export interface ITrlUploadsDto {
  type: string;
  name: string;
  url: string;
  file: any;
  project_id: string;
  trl_id: string;
  trl_level_id: string;
}

export interface CourseTemp extends Course {
  department: string;
  author: UserMeta;
  semester: number;
  academic_year: number;
  course_type: string;
  expert_id: string;
  capacity:number;
  nba_code:string;
  co_attainment:any
}

