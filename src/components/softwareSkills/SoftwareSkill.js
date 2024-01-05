import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { Icon } from '@iconify/react';

export default function SoftwareSkill() {
  return (
    <div>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <Icon icon={skills.iconifyIcon} width="48" height="48"/>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
