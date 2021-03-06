import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import pink from "@material-ui/core/colors/pink";
import Avatar from "../img/avatar.jpg";
import "./About.css";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const myPink = pink[300];
const darkPink = pink[600];
const darkestPink = pink[800];

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
    width: "90%",
  },
  divider: {
    height: ".2rem",
    backgroundColor: `${darkestPink}`,
  },
  avatar: {
    boxSizing: "content-box",
    width: "30rem",
    height: "30rem",
    opacity: "0.7",
  },
  avatarBackground: {
    alignSelf: "center",
    borderRadius: "50%",
    backgroundColor: `${myPink}`,
    overflow: "hidden",
  },
  avatarBackgroundMed: {
    marginTop: "2rem",
    alignSelf: "start",
    borderRadius: "50%",
    backgroundColor: `${myPink}`,
    overflow: "hidden",
  },
  robotoBold: {
    fontWeight: 700,
  },
  listItemIcon: {
    minWidth: "3rem",
  },
  listItemPadding: {
    paddingRight: "0",
  },
}));

export const About = () => {
  const classes = useStyles();
  const mediumScreen = useMediaQuery("(max-width: 56.25em)");
  const smallScreen = useMediaQuery("(max-width: 37.5em)");

  return (
    <div
      id="about"
      className={classes.content}
      style={{
        paddingBottom: smallScreen ? "10rem" : "25rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <Typography
          style={{ fontFamily: "Noto Sans TC" }}
          color="secondary"
          variant="h3"
        >
          About Me
        </Typography>
        <Divider
          classes={{
            root: classes.divider,
          }}
          style={{
            marginLeft: "1.5rem",
            width: "29rem",
            alignSelf: "center",
          }}
        />
      </div>
      <div className="inner-content">
        <div>
          <Typography
            color="primary"
            variant="body1"
            style={{ width: "50rem", marginTop: "3.5rem" }}
          >
            Hey there! Thanks for visiting my website. My name is Leslie and I
            am a software engineer in Los Angeles.
            <br />
            <br />
            My passion for developing web applications began during my
            undergrad. After building applications for class assignments using
            both the traditional tech stack (Linux, Apache Tomcat, MySQL, PHP)
            and the modern tech stack (Angular, Express, Node, MongoDB), I found
            myself enamored with the web ecosystem. On one side, I could create
            aesthetic features to attract users to the website (frontend) and on
            the other, I could write efficient algorithms to process and
            manipulate our data (backend).
            <br />
            <br />I graduated in June 2019 with a Bachelor of Science in
            Computer Science from{" "}
            <span className={classes.robotoBold}>UCLA</span> and I have been
            working at{" "}
            <span className={classes.robotoBold}>Northrop Grumman</span> ever
            since. I am humbled and blessed to be able to work for such a
            fantastic organization where we tackle meaningful problems related
            to national security. I feel like I am doing impactful work.
            <br />
            <br />
            Here are some technologies that I am fairly familiar with:
          </Typography>
          <div style={{ width: "51rem" }}>
            <List
              dense
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "70%",
                color: `${darkPink}`,
              }}
            >
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="React" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Angular" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Node.js" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="HTML & (S)CSS" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="JavaScript" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="TypeScript" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Express" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="MongoDB" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="MySQL" />
              </ListItem>
              <ListItem
                classes={{
                  gutters: classes.listItemPadding,
                }}
                style={{ flex: "0 0 50%" }}
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <ChevronRightRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="C++" />
              </ListItem>
            </List>
          </div>
        </div>
        <div
          className={
            mediumScreen
              ? classes.avatarBackgroundMed
              : classes.avatarBackground
          }
        >
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/lliang9838"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={classes.avatar} src={Avatar} alt="avatar" />
          </a>
        </div>
      </div>
    </div>
  );
};
