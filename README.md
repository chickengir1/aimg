# Aimg

**Aimg**는 사용자가 입력한 프롬프트를 바탕으로 **AI 기반 이미지를 생성**하는 웹 애플리케이션입니다.  
**OpenAI API**를 활용하여 사용자에게 독창적이고 맞춤화된 AI 생성 이미지를 제공합니다.

![image](https://github.com/user-attachments/assets/322cc8b6-667e-4c51-adb5-ae9ed9009863)

---

## 주요 기능

### 💻 **사용자 친화적인 인터페이스**
- 직관적인 UI를 통해 **프롬프트 입력 및 이미지 확인**이 쉽고 간편합니다.

### 🖼️ **AI 기반 이미지 생성**
- **OpenAI의 API**를 활용해 텍스트 프롬프트를 기반으로 맞춤형 이미지를 생성합니다.

### 🎨 **맞춤화 옵션**
- 사용자가 세부 설명을 입력하여 **구체적인 요구를 반영한 이미지 생성**이 가능합니다.

### ⚡ **실시간 이미지 생성**
- **빠르고 원활한 사용자 경험**을 제공하며, 생성된 이미지를 실시간으로 확인할 수 있습니다.

---

## 시작하기

Aimg 프로젝트를 시작하려면 아래의 단계를 따라주세요.

### 🛠️ **필수 조건**
- **Node.js** (버전 14 이상)
- **npm** (버전 6 이상)
- **OpenAI API 키**

---

### 📦 **설치**

1. **레포지토리 클론:**

```bash
git clone https://github.com/yourusername/aimg.git
cd aimg
```

2. **의존성 설치:**

```bash
npm install
```

3. **환경 변수 설정:**
   - 루트 디렉토리에 `.env` 파일을 생성하고 OpenAI API 키를 추가하세요:

```
OPENAI_API_KEY=your_openai_api_key
```

---

### 🚀 **애플리케이션 실행**

1. **서버 시작:**

```bash
npm start
```

2. **브라우저에서 애플리케이션 실행:**
   - 아래 주소로 이동하여 Aimg 인터페이스를 확인하세요:

```
http://localhost:3000
```

---

## 사용 방법

1. **프롬프트 입력:**
   - 생성하고자 하는 이미지의 **세부 설명**을 프롬프트 입력 필드에 입력하세요.

2. **이미지 생성:**
   - "Generate" 버튼을 클릭하면 프롬프트가 OpenAI API로 전송되어 **이미지가 생성**됩니다.

3. **보기 및 다운로드:**
   - 생성된 이미지를 페이지에서 확인하고, 필요 시 다운로드하세요.

---

**Aimg와 함께 독창적이고 창의적인 AI 이미지를 만들어보세요!** 🚀
