import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'staff-list-panel',
  templateUrl: './staff-list-panel.component.html',
  styleUrls: ['./staff-list-panel.component.scss']
})
export class StaffListPanelComponent implements OnInit {

  public staff = [
    {
      name: 'Bryan Doo',
      title: 'Owner and Founder of Optimal Fitness',
      credentials: 'BS, MS- ACSM/NASM- CPT, NSCA CSCS',
      avatar: 'bryan.jpg',
      bio: ['Bryan Doo is the founder and president of Optimal Fitness Boston. Doo founded Optimal Fitness in 1996 where he was the sole trainer and has since grown it into a business with in-home personal training, a brick and mortar location, virtual training, corporate wellness and strength and conditioning for athletes.',
        'While running OFit, Doo was hired by the Boston Celtics as Head Strength and Conditioning Coach in 2003 and remained an integral part of the team for 14 years. He worked with the athletes year round to prepare them for their upcoming season, rehab injuries, condition in-season and more. While on staff, the Celtics won the 2007-2008 NBA Championship and was voted by his peers as the 2015-2016 NBA Strength Coach of the Year.',
        'While still with the Celtics, Doo and Optimal Fitness joined forces with various businesses in the greater Boston area to manage their corporate wellness facilities and create programming for the various companies employees. The first site that Doo was tasked to manage was Bain Capital, which is located in downtown Boston, and Optimal Fitness has maintained the role to this day.',
        'Prior to the Celtics, Doo served as the Director of Wellness at Harvard Business School (1998-2001), where he implemented programs and activities for staff, students and executive education cohorts.  He also coached women’s lacrosse and was a strength and conditioning coach in the athletic department at Harvard University from 1999-2001. More recently, he joined forces with Harvard again now serving as an assistant strength coach and program mentor for the Harvard Men’s Basketball Team.',
        'Doo has also consulted and trained various NBA, NHL, EPL, Olympic, WTA, elite athletes and more. He is a frequent speaker regarding sports and athletic development, injury prevention and team training at local and national conferences. He also served as a guest lecturer at Brown University as part of the Exercise Physiology/Biomechanics course. ']
    },
    {
      name: 'Laurie Lamoureux Borrelli',
      title: 'Director of Optimal Fitness & Strength & Conditioning',
      credentials: 'NSCA-CSCS, NASM-CPT,  B.S. in Sports Medicine, Merrimack College',
      avatar: 'Laurie.jpg',
      bio: ['Laurie joined the Optimal Fitness Boston team in 2007 and is currently the Director of Health and Human Performance. Laurie earned a B.S. in Sports Medicine with a focus in exercise physiology from Merrimack College. At Merrimack, Laurie excelled on the women\'s soccer team as the team captain and earned All-American honors and All Scholar- All American. From there she earned a spot on the Women\'s USA Futsal team where she played in multiple tournaments.',
        'Laurie brings her positive energy as well as her incredible background in sports and injury prevention to help clients and athletes of all levels excel. Laurie is known for her ability to customize programs to the individuals needs and to use science to help individuals excel and reach their goals.',
        'Laurie has coached soccer since she was in high school. Laurie’s passion is helping others and she continues to do so every day from pro athletes, to weekend warriors, grandparents, middle schoolers, and everyone in between. She focuses on their needs and designs her training programs accordingly, both as a personal trainer and a soccer coach, which she has been doing since high school.',
        ' At Optimal Fitness Boston, Laurie trains at clients homes, in the Lexington facility, virtually via Zoom and runs our strength and conditioning camps for athletes.']
    },
    {
      name: 'Zach Wiernicki',
      title: 'Exercise Specialist',
      credentials: 'NASM-CPT, CES and PES;  B.S. in Sports and Exercise Science, Messiah College',
      avatar: 'zach.JPG',
      bio: ['Zach joined the Optimal Fitness team in 2006 and brings more than a decade of training experience to the team. Before joining Optimal Fitness, he held an internship with the strength and conditioning coach for the Boston Celtics.',
        'Zach attended Messiah College and earned his B.S. in Sports and Exercise Science with a health and fitness concentration and played on the men’s basketball team. He was first team all-league as a power forward and is part of the 1,000 point club. He specializes in basketball skill development and brings great enthusiasm into his training sessions with both athletes and general populations alike.',
        'At Optimal Fitness Boston, Zach trains with corporate partners; at clients homes: with professional, collegiate and high school athletes, and via Zoom.']
    },
    {
      name: 'Amanda Carvalho',
      title: 'Site Coordinator/Personal Trainer',
      credentials: 'NASM-CPT and PES;B.S. in Allied Health Science, University of Connecticut; M.S. in Exercise Science and Health Promotion, California University of Pennsylvania',
      avatar: 'amanda.jpg',
      bio: ['Amanda joins Optimal Fitness with an abundance of knowledge from her degrees in Allied Health Science from the University of Connecticut and in Exercise Science and Health Promotion with a concentration in Performance Enhancement and injury prevention from California University of Pennsylvania.',
        'Kicking off her professional career, Amanda spent her first four years personal training. In her most recent position, she began as a personal trainer and worked her way up to the general manager of a private training facility.  She also spent 4 years working in an orthopedic physical therapy clinic where she helped patients of all ages and levels of rehabilitation. In addition, she oversaw her own patients in an aftercare program designed to get athletes and active adults back to their pre-injury levels. ',
        'Working with her patients, as well as her own experience with injuries, propelled Amanda to go back to school and earn her Master\'s degree, and concurrently her certifications as a personal trainer and Performance Enhancement Specialist through NASM.',
        'In addition to personal training, Amanda spent 8 years coaching high school and youth premier club soccer after having been a member of the Division 1 UConn women’s soccer team and playing throughout her entire life.',
        'At Optimal Fitness Boston, Amanda trains virtually via Zoom.']
    },
    {
      name: 'Jack Baldwin',
      title: 'Performance Coach',
      credentials: 'NSCA-CSCS; M.S. in Kinesiology, Long Beach State University; B.S. in Applied Exercise Science, Springfield College',
      avatar: 'jack.jpeg',
      bio: ['Jack joins the Optimal Fitness staff with five years’ experience as a strength and conditioning coach. He has worked with athletes from youth, high school, college and Olympic levels, including USA Beach Volleyball athletes. Jack is passionate about helping athletes gain a competitive advantage by learning the skills needed for their sport, both mentally and physically. His goal is to teach athletes to become better movers, gain strength and customize training programs to meet the needs of each athlete.',
        'Jack recently completed his Master of Science Degree at Long Beach State University in Kinesiology with a specialization in Sport Psychology. Prior to getting his Masters, he completed his Bachelor of Science Degree from Springfield College in Applied Exercise Science with concentration in Sport Performance. He is a Certified Strength and Conditioning Specialist (CSCS) through the National Strength and Conditioning Association (NSCA).',
        'Jack grew up in Western Massachusetts and was a 4-year collegiate baseball player at Springfield College. In his free time, he enjoys anything outdoors, reading non-fiction books, quality time with family and friends, and watching and playing multiple sports including basketball, golf, tennis, and baseball.',
        'At Optimal Fitness, Jack trains primarily at the Beach House and Lexington.']
    },
    {
      name: 'Eryenne Brinn',
      title: 'Group Instructor/ Personal Trainer',
      credentials: 'NASM-CPT, B.S. in Sport Management, Ithaca College',
      avatar: 'eryenne.JPG',
      bio: ['Eryenne is a former public relations and marketing pro turned personal trainer and group fitness coach. Having played sports her entire life including women’s lacrosse at Ithaca College, working in gyms throughout high school and college, and training herself with strength coaches along the way, she always had a love and keen interest for the field of fitness. After working in Corporate America for nearly a decade she decided to take her long-time passion for fitness and meld it with her desire to help others. Eryenne has been a full-time personal trainer since 2016, joined Optimal Fitness in 2018, and has helped countless people live happier and healthier lives while reaching their goals.',
        'Eryenne’s love for working with others has led her to pursue various training certifications, in addition to her National Academy of Sports Medicine - Certified Personal Trainer (NASM-CPT) certification, including kettlebells, pre/post natal, spinning and trigger point. And she plans to continue growing her knowledge base to better serve her clients and help others in the future.',
        'At Optimal Fitness Boston, Eryenne trains with corporate partners, at clients homes, in the Lexington facility and virtually via Zoom.']
    },
    {
      name: 'Corinne Donovan',
      title: 'Group Instructor/ Personal Trainer',
      credentials: 'ISSA-CPT',
      avatar: 'corinne.JPG',
      bio: ['Corinne Donovan has been training and teaching group fitness classes for more than 15 years. As a trainer Corinne loves to push her clients to be their best physically, mentally and emotionally.  She creates individualized programs for each of her clients that best suit their needs so they can see results quickly.  She specializes in High Intensity Interval Training (HIIT) and wants her clients to walk away feeling energized and wanting more!  ',
        'Corinne is certified through the International Sport Science Association (ISSA) and she received her Master Trainer certification through NY Strength.  ',
        'Corinne has worked in various well known fitness centers in and around the Boston area. At Optimal Fitness Boston, Corinne trains at clients homes and virtually via Zoom.']
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
