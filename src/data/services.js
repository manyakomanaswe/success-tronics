import Consult from '../assets/consult.jpg';
import Support from '../assets/support.jpg';
import Manage from '../assets/management.jpg';
import Cable from '../assets/cable.jpg';
import Repair from '../assets/repair.jpg';
import Server from '../assets/server.jpg';


import talk from '../assets/talk.png';
import customer from '../assets/customer-service.png';
import manage from '../assets/folder-management.png';
import cloud from '../assets/infrastructure.png';
import network from '../assets/cloud-network.png';
import repair from '../assets/laptop.png';
const services = [
    {ServiceImage:Consult,Icon:talk, heading:"IT Consulting", tag:"Our vastly experienced dedicated pool of resources are ready to work on your IT Systems"},
    {ServiceImage:Support,Icon:customer, heading:"IT Support", tag:"Our vastly experienced dedicated pool of resources are ready to work on your IT Systems"},
    {ServiceImage:Manage,Icon:manage, heading:"IT Management", tag:"Our managed IT services will help you to spend time on the aspects of your business that matter most"},
    {ServiceImage:Server,Icon:cloud, heading:"Cloud & Infrastructure", tag:"We monitor all your cloud data to provide real-time analytics while guaranteeing cyber threat protections"},
    {ServiceImage:Cable,Icon:network, heading:"Network and Cabling", tag:"The company undertakes all sizes of network installation projects to provide a total service"},
    {ServiceImage:Repair,Icon:repair, heading:"General IT Repairs", tag:"We regularly execute maintenance activities on your IT systems and hardware to keep them operating securely and effectively for you"}];

export default services;