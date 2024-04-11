import { Job } from "../interfaces/type.interface";
import {
  IconEyecam,
  IconAccount,
  IconFaceit,
  IconInsure,
  IconLoopStudios,
  IconManage,
  IconMyhome,
  IconPhotosnap,
  IconShortly,
  IconTheAirFilterCompany
} from './assets'
  
export const jobsData: Job[] = [
    {
      company: "Photosnap",
      isNew: true,
      isFeatured: true,
      position: "Senior Frontend Developer",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA only",
      tag: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
      icon:  IconPhotosnap
    },
    {
      company: "Manage",
      isNew: true,
      isFeatured: true,
      position: "Fullstack Developer",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      tag: ["Fullstack", "Midweight", "Python", "React"],
      icon: IconManage
    },
    {
      company: "Account",
      isNew: true,
      position: "Junior Frontend Developer",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA only",
      tag: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
      icon: IconAccount
    },
    {
      company: "MyHome",
      position: "Junior Frontend Developer",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA only",
      tag: ["Frontend", "Junior", "CSS", "JavaScript"],
      icon: IconMyhome
      
    },
    {
      company: "Loop Studios",
      position: "Software Engineer",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      tag: ["Fullstack", "Midweight", "JavaScript", "Ruby", "Sass"],
      icon: IconLoopStudios // Icono de FontAwesome
    },
    {
      company: "FaceIt",
      position: "Junior Backend Developer",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK only",
      tag: ["Backend", "Junior", "Ruby", "RoR"],
      icon:  IconFaceit // Ejemplo de otro icono
    },
    {
      company: "Shortly",
      position: "Junior Developer",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      tag: ["Frontend", "Junior", "HTML", "JavaScript", "Sass"],
      icon:  IconShortly // Icono de FontAwesome
    },
    {
      company: "Insure",
      position: "Junior Frontend Developer",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA only",
      tag: ["Frontend", "Junior", "JavaScript", "Vue", "Sass"],
      icon: IconInsure// Icono de FontAwesome
    },
    {
      company: "Eyecam Co.",
      position: "Full Stack Engineer",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      tag: ["Fullstack", "Midweight", "JavaScript", "Python", "Django"],
      icon: IconEyecam // Icono de FontAwesome
    },
    {
      company: "The Air Filter Company",
      position: "Front-end Dev",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      tag: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
      icon: IconTheAirFilterCompany // Icono de FontAwesome
    }
  ];
  
  console.log(jobsData);