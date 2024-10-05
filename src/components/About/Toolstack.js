import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 20,
  },
}));

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <LightTooltip title="MacOS">
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      </LightTooltip>
      <LightTooltip title="VS Code">
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      </LightTooltip>
      <LightTooltip title="Git">
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>
      </LightTooltip>
    </Row>
  );
}

export default Toolstack;
