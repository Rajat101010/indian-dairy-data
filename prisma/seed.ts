import { PrismaClient, PublishStatus } from "@prisma/client";
import bcrypt from "bcryptjs";
const db = new PrismaClient();
async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (email && password) {
    await db.adminUser.upsert({ where: { email }, update: {}, create: { email, passwordHash: await bcrypt.hash(password, 12), name: "IDC Administrator", role: "ADMIN" } });
  }
  const solutions = [
    ["Price Intelligence","price-intelligence","Farm-gate milk, fat and SNF, SMP, butter and ghee price signals."],
    ["Price Index Method","price-index-method","Transparent observation, aggregation, governance and revision protocols."],
    ["Price Transmission","price-transmission","Trace value from milk components through processed dairy products."],
    ["Outlook and Forecasts","outlook-and-forecasts","Base-case outlook with upside, downside and confidence ranges."],
    ["Farm Economics","farm-economics","Compare representative farm costs, margins and sensitivities."],
    ["State Research Network","state-research-network","A proposed state-level research network with structured field returns."],
    ["Decision Products","decision-products","Briefings and evidence products for processors, cooperatives and policy."],
    ["Sector Roadmap","sector-roadmap","Dairy-first roadmap; adjacent sectors marked as coming soon."]
  ];
  for (let i=0;i<solutions.length;i++) {
    const [title,slug,shortDescription] = solutions[i];
    await db.solution.upsert({ where:{slug}, update:{}, create:{title,slug,shortDescription,content:[{type:"heading",text:title},{type:"paragraph",text:shortDescription},{type:"paragraph",text:"SAMPLE CONCEPT CONTENT — replace with approved methodology and verified research before publication."}],sortOrder:i,visible:true} });
  }
  const pages = [["about-us","About Us","Research-led market intelligence for India's dairy value chain."],["knowledge-partners","Knowledge Partners","A space for methodology, research and knowledge collaborations."],["partners","Partners","Organisations supporting evidence-led dairy market understanding."],["publisher","Publisher","Publication standards, corrections and editorial information."],["research-network","Research Network","A proposed state-level network for consistent market observations."],["get-in-touch","Get in Touch","Contact the team about research, data and collaboration."]];
  for (let i=0;i<pages.length;i++) { const [slug,title,excerpt] = pages[i]; await db.companyPage.upsert({where:{slug},update:{},create:{slug,title,excerpt,content:[{type:"paragraph",text:excerpt},{type:"paragraph",text:"SAMPLE PAGE CONTENT — update through the admin CMS."}],sortOrder:i,visible:true}}); }
  await db.siteSetting.upsert({where:{key:"brandName"},update:{},create:{key:"brandName",value:"Indian Dairy Consortium"}});
  await db.siteSetting.upsert({where:{key:"homeKpis"},update:{},create:{key:"homeKpis",value:[{label:"Pilot states",value:13,note:"Concept target · sample"},{label:"Researchers",value:16,note:"Concept target · sample"},{label:"Price series",value:0,note:"No live series loaded"},{label:"Data points",value:0,note:"No live data loaded"}]}});
  if (!(await db.readItem.findFirst())) {
    await db.readItem.create({data:{title:"How to Read a Dairy Market Balance",slug:"sample-dairy-market-balance",metaDescription:"A sample introduction to dairy market balance concepts.",category:"Explainer",tags:["sample","market balance"],content:[{type:"heading",level:2,text:"What is a market balance?"},{type:"paragraph",text:"SAMPLE CONTENT. A market balance organises supply, use, trade and stock movements into a consistent accounting view."},{type:"heading",level:2,text:"Read the basis carefully"},{type:"paragraph",text:"Every published series should state source, observation date, geography, unit, method and confidence. No live market data is included in this sample."}],status:PublishStatus.PUBLISHED,pinned:true,sortOrder:0,publishedAt:new Date()}})
  }
}
main().finally(()=>db.$disconnect());