module.exports = {
  siteUrl: "https://mydomain.com",
  generateRobotsTxt: true, // robots.txt 생성
  sitemapSize: 7000,
  exclude: ["/404"], // 제외할 경로
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
