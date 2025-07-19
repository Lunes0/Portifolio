import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GitHubStats } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur omnis
      ad dolorem vel tempore assumenda necessitatibus neque. Quibusdam natus
      dolor placeat iusto iste ducimus, dolores tenetur, reprehenderit veritatis
      repellendus assumenda.
    </Paragraph>
    <GitHubStats>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=Lunes0&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lunes0&layout=compact&langs_count=7&theme=dracula"
      />
    </GitHubStats>
  </section>
)

export default About
