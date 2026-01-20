export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            안녕하세요, <br />개발자 
            <span className="text-blue-600"> Hyun</span>입니다
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            프론트엔드 개발자로서 사용자 경험을 중요시하는 웹 서비스를 만들고 있습니다.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              프로젝트 보기
            </a>
            <a
              href="/blog"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              블로그 보기
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">기술 스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">최근 포스트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-xl mb-2">
                  최근 포스트 제목 {post}
                </h3>
                <p className="text-gray-600 mb-4">
                  포스트 내용 미리보기입니다. 실제 포스트 내용이 들어갈 자리입니다.
                </p>
                <a
                  href={`/blog/post-${post}`}
                  className="text-blue-600 hover:text-blue-700"
                >
                  더 보기 →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
