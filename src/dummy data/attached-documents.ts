import { UserSessionUpload } from "../../../skill-ed-web/src/supabaseServices/models";

export const attached_documents = [
  {
    name: "Nature Image",
    url: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-2019/natgeo-best-pictures-2019-00001.adapt.1900.1.jpg",
    type: "url",
    storage_path: "/images/nature-image.jpg",
    size: 204800, // 200 KB in bytes
    created_at: "2024-05-25T15:00:00Z",
    content_type: "image/jpeg",
  },
  {
    name: "Space Image",
    url: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia24580-main.jpg",
    type: "url",
    storage_path: "/images/space-image.jpg",
    size: 307200, // 300 KB in bytes
    created_at: "2024-05-24T16:00:00Z",
    content_type: "image/jpeg",
  },
  {
    name: "Project Report",
    url: "https://www.cmu.edu/student-org/documents/sample-report.pdf",
    type: "url",
    storage_path: "/documents/project-report.pdf",
    size: 1048576, // 1 MB in bytes
    created_at: "2024-05-25T10:00:00Z",
    content_type: "application/pdf",
  },
  {
    name: "Research Paper",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    type: "url",
    storage_path: "/documents/research-paper.pdf",
    size: 2097152, // 2 MB in bytes
    created_at: "2024-05-24T11:00:00Z",
    content_type: "application/pdf",
  },
  {
    name: "User Guide",
    url: "https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf",
    type: "url",
    storage_path: "/documents/user-guide.pdf",
    size: 524288, // 512 KB in bytes
    created_at: "2024-05-23T12:00:00Z",
    content_type: "application/pdf",
  },
  {
    name: "Design Document",
    url: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
    type: "url",
    storage_path: "/documents/design-document.pdf",
    size: 3145728, // 3 MB in bytes
    created_at: "2024-05-22T13:00:00Z",
    content_type: "application/pdf",
  },
  {
    name: "Annual Report",
    url: "https://www.ibm.com/annualreport/assets/downloads/IBM_Annual_Report_2020.pdf",
    type: "url",
    storage_path: "/documents/annual-report.pdf",
    size: 10485760, // 10 MB in bytes
    created_at: "2024-05-21T14:00:00Z",
    content_type: "application/pdf",
  },
] as UserSessionUpload[];
