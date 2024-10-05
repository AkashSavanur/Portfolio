import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiMui,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <LightTooltip title="C++">
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
      </LightTooltip>
      <LightTooltip title="JavaScript">
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </LightTooltip>
      <LightTooltip title="HTML5">
        <Col xs={4} md={2} className="tech-icons">
          <FaHtml5 />
        </Col>
      </LightTooltip>
      <LightTooltip title="CSS3">
        <Col xs={4} md={2} className="tech-icons">
          <FaCss3Alt />
        </Col>
      </LightTooltip>
      <LightTooltip title="Node.js">
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </LightTooltip>
      <LightTooltip title="React">
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </LightTooltip>
      <LightTooltip title="Material-UI">
        <Col xs={4} md={2} className="tech-icons">
          <SiMui />
        </Col>
      </LightTooltip>
      <LightTooltip title="Express.js">
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
      </LightTooltip>
      <LightTooltip title="MongoDB">
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </LightTooltip>
      <LightTooltip title="PostgreSQL">
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </LightTooltip>
      <LightTooltip title="Python">
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </LightTooltip>
      <LightTooltip title="Java">
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </LightTooltip>
      <LightTooltip title="Pandas">
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
        </Col>
      </LightTooltip>
      <LightTooltip title="NumPy">
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy />
        </Col>
      </LightTooltip>
      <LightTooltip title="SciKitLearn">
        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn />
        </Col>
      </LightTooltip>
      <LightTooltip title="PyTorch">
        <Col xs={4} md={2} className="tech-icons">
          <SiPytorch />
        </Col>
      </LightTooltip>
    </Row>
  );
}

export default Techstack;
