import {
  CircularProgress,
  createStyles,
  Dialog,
  DialogContent,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
  CourseRemark,
  RubricCriteria,
  RubricCriteriaEvaluation,
  RubricData,
  RubricEvaluation,
  RubricPerformanceDescriptor,
  RubricPerformanceRating,
} from "../../models/apiModels";

import useStyles from "./GenericRubricEvaluations.styles";
import { rubric_data } from "../../dummy data/rubrics";
import { Button } from "@mui/material";
import { course_remarks_rags } from "../../dummy data/course-remarks-tags";

interface Props {
  callback: () => void;
}

export default function GenericRubricEvaluations({ callback }: Props) {
  const classes = useStyles();
  const [totalScore, setTotalScore] = useState<number>(0);
  const [rubric, setRubric] = useState<RubricData>(rubric_data);
  const [rubricEvaluation, setRubricEvaluation] = useState<RubricEvaluation>(
    {} as RubricEvaluation
  );
  const [evaluations, setEvaluations] = useState<RubricCriteriaEvaluation[]>(
    []
  );
  const [selected_tag, set_selected_tag] = useState("");
  const [student_remarks, set_student_remarks] = useState<CourseRemark>(
    {} as CourseRemark
  );
  const theme = useTheme();

  useEffect(() => {
    if (evaluations?.length > 0) {
      setTotalScore(evaluations?.reduce((a, b) => a + b.score, 0));
    }
  }, [evaluations]);

  const handleChange = (descriptor: RubricPerformanceDescriptor) => {
    let evaluations_list = [...evaluations];

    let current_criteria = rubric?.criterias?.find(
      (criteria) => criteria?.id === descriptor?.rubric_criteria_id
    ) as RubricCriteria;

    let current_rating = rubric?.ratings?.find(
      (rating) => rating?.id === descriptor?.rubric_performance_rating_id
    ) as RubricPerformanceRating;

    let current_item = evaluations_list?.find(
      (item) => item?.criteria_id === descriptor?.rubric_criteria_id
    );

    if (current_item) {
      for (let i = 0; i < evaluations_list.length; i++) {
        if (
          evaluations_list[i].criteria_id === descriptor?.rubric_criteria_id
        ) {
          evaluations_list[i].performance_rating_id =
            descriptor.rubric_performance_rating_id;
          evaluations_list[i].score =
            parseFloat(
              (
                (current_criteria?.weightage / 100) *
                current_rating?.value
              )?.toFixed(2)
            ) || 0;
        }
      }
    } else {
      evaluations_list.push({
        criteria_id: descriptor.rubric_criteria_id,
        performance_rating_id: descriptor.rubric_performance_rating_id,
        score:
          parseFloat(
            (
              (current_criteria?.weightage / 100) *
              current_rating?.value
            )?.toFixed(2)
          ) || 0,
      } as RubricCriteriaEvaluation);
    }
    setEvaluations(evaluations_list);
  };

  const getColors = (descriptor: RubricPerformanceDescriptor) => {
    const isPresent = evaluations?.find(
      (item, _index) =>
        item.criteria_id === descriptor?.rubric_criteria_id &&
        item.performance_rating_id === descriptor?.rubric_performance_rating_id
    );

    if (isPresent) {
      return {
        background: theme.palette.secondary.main,
        text: "#FFF",
      };
    } else {
      return {
        background: "#FFF",
        text: "#3D3D3D",
      };
    }
  };

  const getScore = (criteria_id: string) => {
    let score = 0;
    const currentEvaluationItem = evaluations?.find(
      (item) => item?.criteria_id === criteria_id
    );
    if (currentEvaluationItem) {
      score = currentEvaluationItem.score;
    }
    return parseFloat(score.toFixed(2));
  };

  const handleClose = () => {
    callback();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  const performance_ratings_map = useMemo(() => {
    let map: { [rating_id: string]: number } = {};
    rubric?.ratings
      ?.sort((a, b) => a.index - b.index)
      ?.forEach((rating) => {
        map[rating?.id] = rating?.index;
      });
    return map;
  }, [rubric?.ratings]);

  const GetHeader = (props: { ratings: RubricPerformanceRating[] }) => {
    return (
      <TableHead>
        <TableRow>
          <TableCell style={{ width: "150px" }}>Criteria</TableCell>
          <TableCell align="center" style={{ width: "80px" }}>
            Weightage (%)
          </TableCell>

          {props?.ratings
            ?.sort((a, b) => a.index - b.index)
            ?.map((rating, index: number) => {
              return (
                <TableCell key={index} align="center">
                  {`${rating?.title} (${rating?.value})`}
                </TableCell>
              );
            })}
          <TableCell align="center" style={{ width: "80px" }}>
            Score
          </TableCell>
        </TableRow>
      </TableHead>
    );
  };

  if (rubric && rubric?.id && rubric.published) {
    return (
      <>
        <form className={classes.root} onSubmit={handleSubmit}>
          <div className={classes.rubric}>
            <Table>
              <GetHeader ratings={rubric?.ratings} />
              <TableBody>
                {rubric?.criterias?.length > 0 &&
                  rubric?.criterias
                    ?.sort((a, b) => a.index - b.index)
                    ?.map((item) => {
                      return (
                        <TableRow key={item?.id}>
                          <TableCell>{item.criteria}</TableCell>
                          <TableCell align="center">{item.weightage}</TableCell>
                          {item?.performance_descriptors?.length > 0 &&
                            item?.performance_descriptors
                              ?.sort(
                                (a, b) =>
                                  performance_ratings_map[
                                    a?.rubric_performance_rating_id
                                  ] -
                                  performance_ratings_map[
                                    b?.rubric_performance_rating_id
                                  ]
                              )
                              ?.map(
                                (
                                  desc: RubricPerformanceDescriptor,
                                  descIndex: number
                                ) => {
                                  const colors = getColors(desc);
                                  return (
                                    <TableCell
                                      key={descIndex}
                                      align="center"
                                      style={{
                                        background: colors.background,
                                        color: colors.text,
                                      }}
                                      onClick={() => handleChange(desc)}
                                    >
                                      {desc.performance_descriptor}
                                    </TableCell>
                                  );
                                }
                              )}

                          <TableCell align="center">
                            {getScore(item.id)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={rubric?.ratings?.length + 2}>
                    Total
                  </TableCell>
                  <TableCell align="center">{totalScore?.toFixed(3)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>

          <div className={classes.remarks}>
            <TextField
              name="remarks"
              variant="outlined"
              multiline
              value={student_remarks?.remarks}
              onChange={(e) =>
                set_student_remarks({
                  ...student_remarks,
                  remarks: e.target.value,
                })
              }
              fullWidth
              label="Remarks"
            />
          </div>

          <div className={classes.remarksTagsContainer}>
            {course_remarks_rags.map((tag, k) => {
              return (
                <div
                  style={{
                    background:
                      tag === selected_tag
                        ? theme.palette.secondary.main
                        : "#fff",
                  }}
                  className={classes.remarkTag}
                  key={k}
                  onClick={() => set_selected_tag(tag)}
                >
                  <Typography variant="BM14" color="#000">
                    {tag}
                  </Typography>
                </div>
              );
            })}
          </div>

          <div className={classes.buttons}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={evaluations?.length !== rubric?.criterias?.length}
              onClick={handleClose}
            >
              Save
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Back
            </Button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <Typography variant="body2" color="secondary">
        Currently There is no rubric available.
      </Typography>
    );
  }
}
