import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import { Add } from "@mui/icons-material";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./styles.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
    backgroundColor: "#000",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Add sx={{ fontSize: "1.6rem", color: "#fff" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#303030",
  flexDirection: "row-reverse",
  padding: "5px 0",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  color: "#fff",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "#222",
  color: "#fff",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="according-body">
      <h1>Frequently Asked Questions</h1>

      <div className="according">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="BUTTON TEXT">What is Netfilx</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography variant="BUTTON TEXT">How much dose Netfilx cost?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              $9.99 to $19.99 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="BUTTON TEXT">where can I Watch?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="BUTTON TEXT">How do I cancel?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="BUTTON TEXT">What can I watch Netflix?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="sub-input-body-according">
        <input type="text" />
        <button>TRY IT NOW</button>
      </div>
      <p>Ready for Watch? Enter your email to create or restart your mebership</p>
    </div>
  );
}
