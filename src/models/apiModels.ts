import {
  ITeamWithAdditionalInfo,
  ITeamWithTeamMembersInfo,
  ITextEditor,
  SocialLinks,
} from "../../../skill-ed-web/src/supabaseServices/extraModels";
import {
  Centre,
  Course,
  EnrolledCourse,
  EnrolledInternship,
  EventRegistration,
  Institution,
  InternshipContactPerson,
  NotificationAction,
  Organization,
  RowMetaData,
  StudyMaterial,
  Team,
  TeamMembers,
  User,
} from "../../../skill-ed-web/src/supabaseServices/models";
import { UserWithSingleUserMeta } from "./devModels";

export interface Form {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  title: string;
  description: string;
  published: boolean;
  form_meta: FormMeta;
  author: Author;
  questions: QuestionData[];
}

export interface Author {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo_url: string;
}

export interface QuestionData {
  question: FormQuestion;
  options: Option[];
}

export interface INotification {
  created_at: string;
  created_by: string;
  actions: NotificationAction;
  hidden: boolean;
  title: string;
  body: string;
  resource: string;
  resource_id: string;
  category: string;
  read: boolean;
  visible: boolean;
  id: string;
}

export interface NotificationResponse {
  notifications: INotification[];
  total_notifications: number;
}

export interface FormQuestion {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  type: string;
  title: string;
  required: boolean;
  thumbnail: string;
  course_outcome_tags: string[];
  index: number;
}

export interface Option {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  index: number;
  value: string;
  co_tag_value: number;
}

export interface FormMeta {
  [key: string]: string;
}

export interface Quiz {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  title: string;
  description: string;
  thumbnail: string;
  published: boolean;
  quiz_meta: FormMeta;
  author: Author;
  questions: QuizQuestionData[];
}

export interface QuizQuestionData {
  question: QuizQuestion;
  choices: QuizQuestionChoice[];
}

export interface QuizQuestionChoice {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  index: number;
  quiz_id: string;
  thumbnail: string;
  question_id: string;
  value: string;
  type: string;
  old_choice_id: string;
}

export interface QuizQuestion {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  index: number;
  question: string;
  thumbnail: string;
  course_outcome_tags: string[];
}

export interface CourseOutcomeTag {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  tag: string;
  course_id: string;
  type: string;
}

export interface CalendarEvent {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  calendar_id: string;
  event_start: string;
  event_end: string;
  is_all_day: boolean;
  title: string;
  description: string;
  type: string;
  location: string;
  meta_data?: RowMetaData;
}

export interface Rubric {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  meta_data: any;
  rubric_meta: RowMetaData;
  published: boolean;
  created_by: string;
  title: string;
}

export interface RubricCriteria {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  criteria: string;
  weightage: number;
  rubric_id: string;
  created_by: string;
  index: number;
  course_outcome_tags: string[];
}
export interface RubricPerformanceDescriptor {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  performance_descriptor: string;
  rubric_id: string;
  index: number;
  rubric_criteria_id: string;
  rubric_performance_rating_id: string;
  created_by: string;
}
export interface RubricPerformanceRating {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  title: string;
  value: number;
  index: number;
  rubric_id: string;
  created_by: string;
}

export interface RubricEvaluation {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  rubric_id: string;
  total_score: number;
  student_id: string;
  faculty_id: string;
  rubric_evaluation_meta: RowMetaData;
}

export interface RubricCriteriaEvaluation {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  criteria_id: string;
  score: number;
  performance_rating_id: string;
  rubric_evaluation_id: string;
}

export interface RubricCriteriaData extends RubricCriteria {
  performance_descriptors: RubricPerformanceDescriptor[];
}

export interface RubricData extends Rubric {
  ratings: RubricPerformanceRating[];
  criterias: RubricCriteriaData[];
}

export interface RubricEvaluationData extends RubricEvaluation {
  rubric_criteria_evaluations: RubricCriteriaEvaluation[];
}

export interface PeerFormResponse {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  form_id: string;
  form_question_id: string;
  choices: string[];
  value: string[];
  type: string;
  created_by: string;
  peer_id: string;
  evaluation_type: string;
}

export interface PeerEvaluationStatus {
  id: string;
  email: string;
  name: string;
  evaluations: string[];
}

export interface FormSubmissionStatus {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  form_id: string;
}

export interface StudentReportStudentData extends UserMeta {
  email: string;
  name: string;
  photo_url: string;
  institution: string;
  team: string;
  batch: string;
  course_title: string;
}

export interface StudentReportElement {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  course_id: string;
  report_criteria: string;
  weightage: number;
  meta_data: RowMetaData;
}

export interface StudentReportCieScore {
  id: string;
  title: string;
  student_report_element_id: string;
  index: number;
  rubric_id: string;
  score: number;
  max_score: number;
}

export interface StudentReportDataCie extends StudentReportElement {
  data: StudentReportCieScore[];
}

export interface StudentReportDataQuiz extends StudentReportElement {
  data: StudentReportQuizScore[];
}

export interface StudentReportQuizScore {
  session_id: string;
  session_number: number;
  session_title: string;
  quiz_id: string;
  quiz_title: string;
  score: number;
  total_questions: number;
}

export interface StudentReportAssignmentScore {
  session_id: string;
  session_number: number;
  session_title: string;
  rubric_id: string;
  rubric_title: string;
  score: number;
  max_score: number;
}

export interface StudentReportDataAssignment extends StudentReportElement {
  data: StudentReportAssignmentScore[];
}

export interface StudentReportDataAttendance extends StudentReportElement {
  data: number;
}

export interface StudentReportData {
  student: StudentReportStudentData;
  cie: StudentReportDataCie;
  quiz: StudentReportDataQuiz;
  assignment: StudentReportDataAssignment;
  external: StudentReportDataCie;
  attendance: StudentReportDataAttendance;
}

export interface CourseRemark {
  id: string;
  created_at: string;
  updated_at: string;
  course_id: string;
  faculty_id: string;
  student_id: string;
  resource_type: string;
  resource_id: string;
  remarks: string;
  batch_id: string;
  remarks_tags: string[];
}

export interface Internship {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  application_deadline: string;
  description: string;
  duration: number;
  internship_start_month: string;
  internship_type: string;
  location: string;
  perks: string;
  required_skills: string[];
  responsibilities: string[];
  role: string;
  status: string;
  title: string;
  organization_id: string;
  published: boolean;
  meta_data: any;
  branches: string[];
}

export interface InternshipData extends Internship {
  internship_contact_people: InternshipContactPerson[];
  organization: Organization;
}

export interface InternshipProblemStatement {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  title: string;
  thumbnail: string;
  description: ITextEditor | undefined;
  required_skills: ITextEditor | undefined;
  outcome_requirements: ITextEditor | undefined;
  internship_id: string;
  qualification_percentage: number;
  max_teams: number;
  max_members_per_team: number;
  branches: string[];
}

export interface InternshipProblemStatementSubmission {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  problem_statement_id: string;
  index: number;
  title: string;
  description: string;
  submission_deadline: string;
  submission_type: string;
  reference_materials: StudyMaterial[];
}

export interface InternshipProblemStatementUpload {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  problem_statement_id: string;
  submission_id: string;
  submission_type: string;
  type: string;
  name: string;
  url: string;
  size: number;
  storage_path: string;
  content_type: string;
}

export interface InternshipProblemStatementDailyJournal {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  problem_statement_id: string;
  submission_id: string;
  submission_type: string;
  daily_todos: string;
  implements: string;
  outputs: string;
}

export interface EnrolledInternshipProblemStatement {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  problem_statement_id: string;
  problem_statement: InternshipProblemStatement;
}

export interface TeamMemberDetails extends TeamMembers {
  member: UserWithSingleUserMeta;
}

export interface ProblemStatementEvaluationTeam extends Team {
  teamMembers: TeamMemberDetails[];
}

export interface ProblemStatementSubmissionUploadsCount {
  submission_id: string;
  index: number;
  title: string;
  submission_type: string;
  submissions_count: number;
}

export interface MentorData extends Mentor {
  mentor: UserWithSingleUserMeta;
}

export interface Mentor {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
}

export interface UserMeta {
  id: string;
  serial_id: number;
  created_at: string;
  updated_at: string;
  display_name: string;
  birthday: string;
  institution_id: string | null;
  course: string;
  branch: string;
  semester: number;
  usn: string;
  gender: string;
  phone_numbers: string[];
  about: string;
  type: string;
  professional_info: IProfessionalInfo;
}
export interface IProfessionalInfo {
  organisation_name: string;
  role: string;
  email: string;
}

export interface UserProfileDetails extends UserProfile {
  personal_details: UserMeta;
  experiences: ProfessionalExperience[];
  educations: EducationDetails[];
  user: User;
}

export interface UserProfile {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  sectors: string[];
  interests: string[];
  technical_expertise: string[];
  non_technical_expertise: string[];
  type: string;
  social_contacts: SocialLinks[];
}

export interface ProfessionalExperience {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  organization: string;
  designation: string;
  start_year: string;
  start_month: string;
  end_year: string;
  end_month: string;
  job_type: string;
}

export interface EducationDetails {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  institution: string;
  degree: string;
  start_year: string;
  start_month: string;
  end_year: string;
  end_month: string;
  course_type: string;
}

export interface ProblemStatementUpload {
  id: string;
  created_at: string;
  updated_at: string;
  problem_statement_id: string;
  type: string;
  name: string;
  url: string;
  size: number;
  content_type: string;
  created_by: string;
  storage_path: string;
  caption: string;
}

export interface ICreateEventTeam {
  event_id: string;
  team: ITeamWithAdditionalInfo;
}

export interface IGetEventTeam extends EventRegistration {
  team: ITeamWithTeamMembersInfo;
}

export interface IUpdateEventTeam {
  team: ITeamWithAdditionalInfo;
  event_id: string;
}

export interface UserAndUserMetaInstitutionCentre extends User {
  user_meta: UserMeta;
  institution: Institution;
  centre: Centre;
}

export interface EnrolledInternshipDetails extends EnrolledInternship {
  internship: Internship;
}

export interface EnrolledCourseDetails extends EnrolledCourse {
  courses: Course;
}

export interface ProblemStatementUpload {
  id: string;
  created_at: string;
  updated_at: string;
  problem_statement_id: string;
  type: string;
  name: string;
  url: string;
  size: number;
  content_type: string;
  created_by: string;
  storage_path: string;
  caption: string;
}

export interface StudentSkillTagScore {
  id: string;
  name: string;
  type: string;
  score: number;
  max_score: number;
}

export interface StudentSkillScore {
  [skill_type: string]: StudentSkillTagScore[];
}

export interface ICourse extends Course{
  author:UserMeta
}