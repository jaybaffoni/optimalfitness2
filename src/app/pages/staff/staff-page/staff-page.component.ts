import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss']
})
export class StaffPageComponent implements OnInit {

  public person: string;

  public personData = {
    bryan: {
      name: 'Bryan Doo',
      title: 'Owner and Founder of Optimal Fitness',
      credentials: 'BS, MS- ACSM/NASM- CPT, NSCA CSCS',
      avatar: 'bryan.jpg',
      coverImg: 'bryan_bench2.jpeg',
      middleImg: 'bryan_jump.jpg',
      bio: ['Bryan Doo is the founder and president of Optimal Fitness Boston. Doo founded Optimal Fitness in 1996 where he was the sole trainer and has since grown it into a business with in-home personal training, a brick and mortar location, virtual training, corporate wellness and strength and conditioning for athletes.',
        'While running OFit, Doo was hired by the Boston Celtics as Head Strength and Conditioning Coach in 2003 and remained an integral part of the team for 14 years. He worked with the athletes year round to prepare them for their upcoming season, rehab injuries, condition in-season and more. While on staff, the Celtics won the 2007-2008 NBA Championship and was voted by his peers as the 2015-2016 NBA Strength Coach of the Year.',
        'While still with the Celtics, Doo and Optimal Fitness joined forces with various businesses in the greater Boston area to manage their corporate wellness facilities and create programming for the various companies employees. The first site that Doo was tasked to manage was Bain Capital, which is located in downtown Boston, and Optimal Fitness has maintained the role to this day.',
        'Prior to the Celtics, Doo served as the Director of Wellness at Harvard Business School (1998-2001), where he implemented programs and activities for staff, students and executive education cohorts.  He also coached women’s lacrosse and was a strength and conditioning coach in the athletic department at Harvard University from 1999-2001. More recently, he joined forces with Harvard again now serving as an assistant strength coach and program mentor for the Harvard Men’s Basketball Team.',
        'Doo has also consulted and trained various NBA, NHL, EPL, Olympic, WTA, elite athletes and more. He is a frequent speaker regarding sports and athletic development, injury prevention and team training at local and national conferences. He also served as a guest lecturer at Brown University as part of the Exercise Physiology/Biomechanics course. ']
    },
    laurie: {
      name: 'Laurie Lamoureux Borrelli',
      title: 'Director of Optimal Fitness & Strength & Conditioning',
      credentials: 'NSCA-CSCS, NASM-CPT,  B.S. in Sports Medicine, Merrimack College',
      avatar: '',
      bio: ['Laurie joined the Optimal Fitness Boston team in 2007 and is currently the Director of Health and Human Performance. Laurie earned a B.S. in Sports Medicine with a focus in exercise physiology from Merrimack College. At Merrimack, Laurie excelled on the women\'s soccer team as the team captain and earned All-American honors and All Scholar- All American. From there she earned a spot on the Women\'s USA Futsal team where she played in multiple tournaments.',
        'Laurie brings her positive energy as well as her incredible background in sports and injury prevention to help clients and athletes of all levels excel. Laurie is known for her ability to customize programs to the individuals needs and to use science to help individuals excel and reach their goals.',
        'Laurie has coached soccer since she was in high school. Laurie’s passion is helping others and she continues to do so every day from pro athletes, to weekend warriors, grandparents, middle schoolers, and everyone in between. She focuses on their needs and designs her training programs accordingly, both as a personal trainer and a soccer coach, which she has been doing since high school.',
        ' At Optimal Fitness Boston, Laurie trains at clients homes, in the Lexington facility, virtually via Zoom and runs our strength and conditioning camps for athletes.']
    },
    zach: {
      name: 'Zach Wiernicki',
      title: 'Exercise Specialist',
      credentials: 'NASM-CPT, CES and PES;  B.S. in Sports and Exercise Science, Messiah College',
      avatar: '',
      bio: ['Zach joined the Optimal Fitness team in 2006 and brings more than a decade of training experience to the team. Before joining Optimal Fitness, he held an internship with the strength and conditioning coach for the Boston Celtics.',
        'Zach attended Messiah College and earned his B.S. in Sports and Exercise Science with a health and fitness concentration and played on the men’s basketball team. He was first team all-league as a power forward and is part of the 1,000 point club. He specializes in basketball skill development and brings great enthusiasm into his training sessions with both athletes and general populations alike.',
        'At Optimal Fitness Boston, Zach trains with corporate partners; at clients homes: with professional, collegiate and high school athletes, and via Zoom.']
    }
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('person')) {
      this.person = this.route.snapshot.paramMap.get('person');
      console.log(this.person);
    }
  }

}
