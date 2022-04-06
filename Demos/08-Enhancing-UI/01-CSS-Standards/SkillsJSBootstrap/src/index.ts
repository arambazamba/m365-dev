import { List } from "linqts";
import { httpClient } from "./httpClient";
import { Skill } from "./model";
import { SkillsService } from "./SkillsService";

document.addEventListener("DOMContentLoaded", function(event) {
  let service = new SkillsService();

  //table
  service.Skills.subscribe((data: Skill[]) => {
    let trs = "";
    data.forEach(skill => {
      trs += `<tr><td>${skill.name}</td></tr>`;
    });
    document.querySelector("#tblSkills").innerHTML = `
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>Skill</th>
            </tr>
        </thead>        
        <tbody>${trs}</tbody>
    </table>`;
  });

  //sum
  service.Skills.subscribe((data: Skill[]) => {
    let netListOf = new List(data);
    document.getElementById("sSum").innerText =
      "Summe Ids: " + netListOf.Sum(el => el.id).toString();
  });

  document
    .querySelector("#btnAddSkill")
    .addEventListener("click", (e: Event) => {
      service.addSkill({
        id: parseInt(
          (<HTMLInputElement>document.querySelector("#txtID")).value
        ),
        name: (<HTMLInputElement>document.querySelector("#txtSkill")).value
      });
    });
});
