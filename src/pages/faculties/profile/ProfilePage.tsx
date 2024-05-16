import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./ProfilePage.styles";
import { UserProfileDetails } from "../../../models/apiModels";
import Text from "../../../shared/texts/Text";
import { faculties } from "../../../dummy data/faculties";
import Header from "../../../components/Header/Header";
const DisplayPicture = lazy(() => import("./display-pictures/DisplayPicture"));

export default function ProfilePage() {
  const classes = useStyles();
  const { facultyId }: any = useParams();
  const [user_profile_details, set_user_profile_details] =
    useState<UserProfileDetails>({} as UserProfileDetails);

    console.log("faculty id", facultyId)
    console.log("faculty", user_profile_details)
  useEffect(() => {
    console.log("inside hook outside if")
    if (facultyId) {
      console.log("inside hook inside if")

      const faculty = faculties.find((item) => item.id === facultyId);
      console.log("facylty in useEffect", faculty)
      if (faculty) {
        set_user_profile_details(faculty as UserProfileDetails);
      }
    }
  }, [facultyId]);

  const getSocialContactIcon = (contact_type: string) => {
    switch (contact_type.toLowerCase()) {
      case "email":
        return "/facultyProfilePage/email_icon.png";
      case "github":
        return "/facultyProfilePage/github_icon.png";

      case "instagram":
        return "/facultyProfilePage/instagram_icon.png";

      case "linkedin":
        return "/facultyProfilePage/linkedin_icon.png";

      case "other":
        return "/facultyProfilePage/link_icon.png";
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.profileDetailsContainer}>
        <Header />

        <h1 style={{ margin: "1.5rem 0" }}>
          {user_profile_details?.personal_details?.display_name ||
            user_profile_details.user?.name}
        </h1>

        {user_profile_details.personal_details?.about && (
          <div className={classes.details}>
            <h4>Introduction</h4>
            <Text variant="body3">
              {user_profile_details.personal_details?.about}
            </Text>
          </div>
        )}

        {user_profile_details.personal_details && (
          <div className={classes.details}>
            <div className={classes.subContainer}>
              <img src="/facultyProfilePage/work_icon.png" />
              <div>
                <Text variant="body2">
                  {user_profile_details.personal_details.professional_info.role}
                </Text>
                <Text variant="subtitle2">
                  {
                    user_profile_details.personal_details.professional_info
                      .organisation_name
                  }
                </Text>
              </div>
            </div>
          </div>
        )}

        {user_profile_details.experiences &&
          user_profile_details.experiences.length > 0 && (
            <div className={classes.details}>
              <h4>Past Experience/Roles</h4>
              {user_profile_details.experiences.map((experience) => {
                return (
                  <div key={experience.id} className={classes.subContainer}>
                    <img src="/facultyProfilePage/work_icon.png" />
                    <div>
                      <Text variant="body2">{experience.designation}</Text>
                      <Text variant="subtitle2">{experience.organization}</Text>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        {user_profile_details.educations?.length > 0 && (
          <div className={classes.details}>
            <h4>Education </h4>
            {user_profile_details.educations.map((education) => {
              return (
                <div key={education.id} className={classes.subContainer}>
                  <img src="/facultyProfilePage/work_icon.png" />
                  <div>
                    <Text variant="body2">{education.degree}</Text>
                    <Text variant="subtitle2">
                      {education.institution} &#x2022; {education.start_year}-
                      {education.end_year}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {user_profile_details.interests?.length > 0 && (
          <div className={classes.details}>
            <h4>Interests </h4>
            <div className={classes.flexContainer}>
              {user_profile_details.interests.map((interest, index) => {
                return (
                  <div key={index} className={classes.chip}>
                    {interest}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(user_profile_details.technical_expertise?.length > 0 ||
          user_profile_details.non_technical_expertise?.length > 0) && (
          <div className={classes.details}>
            <h4>Areas of Expertise </h4>

            <div className={classes.subContainer}>
              <Text
                variant="subtitle2"
                style={{ color: "#BBBBBB", width: "200px" }}
              >
                Technical
              </Text>
              <div className={classes.flexContainer}>
                {user_profile_details.technical_expertise?.length > 0 &&
                  user_profile_details.technical_expertise.map(
                    (item, index) => {
                      return (
                        <div key={index} className={classes.chip}>
                          {item}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            <div className={classes.subContainer}>
              <Text
                variant="subtitle2"
                style={{ color: "#BBBBBB", width: "200px" }}
              >
                Non Technical
              </Text>
              <div className={classes.flexContainer}>
                {user_profile_details.non_technical_expertise?.length > 0 &&
                  user_profile_details.non_technical_expertise.map(
                    (item, index) => {
                      return (
                        <div key={index} className={classes.chip}>
                          {item}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        )}

        {user_profile_details.social_contacts?.length > 0 && (
          <div className={classes.details}>
            <h4>Contacts </h4>

            {user_profile_details.social_contacts.map((contact, index) => {
              return (
                <div
                  key={index}
                  className={classes.subContainer}
                  style={{ border: "none", marginBottom: "-0.5rem" }}
                >
                  <img
                    src={getSocialContactIcon(contact.type)}
                    style={{ padding: 0, background: "none" }}
                  />
                  <a
                    href={contact.url}
                    target="_blank"
                    style={{ fontWeight: 400 }}
                  >
                    {contact.url}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={classes.profilePicContainer}>
        <DisplayPicture user_details={user_profile_details} />
      </div>
    </div>
  );
}
