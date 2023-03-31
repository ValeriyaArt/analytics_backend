import {WithStyles} from "@mui/material";
import {IntermediateCertificationType} from "../../../WorkProgram/types";
import styles from "./EvaluationTools.styles";

export interface Props extends WithStyles<typeof styles> {
    actions: any;
    evaluationToolsList: Array<IntermediateCertificationType>;
    isCanEdit: boolean;
}