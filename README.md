# tree-sitter-handlebars-html

Handlebars 템플릿 문법을 파싱하는 tree-sitter 문법입니다. HTML과 Handlebars 템플릿을 함께 지원합니다.

## 주요 변경 사항

- **tree-sitter 0.25.10 버전 업그레이드**: 최신 tree-sitter CLI 도구와 호환성 개선
- **주석 파싱 지원 추가**: Handlebars 주석 (`{{!-- --}}`, `{{! }}`) 문법 파싱 기능 추가

## 크레딧 (Credits)

이 프로젝트는 [@trillioneyes/tree-sitter-handlebars](https://github.com/trillioneyes/tree-sitter-handlebars) 저장소의 소스 코드를 대폭 활용하여 만들어졌습니다. 원작자에게 깊은 감사를 표합니다.

## 설치 및 설정

### 1. 프로젝트 초기화
```bash
tree-sitter init
```

### 2. 파서 생성
```bash
tree-sitter generate
```

### 3. 파서 빌드
```bash
tree-sitter build
```

### 4. 테스트 실행
```bash
tree-sitter test
```

## 사용법

### 파싱 테스트
예제 파일을 파싱하여 결과를 확인할 수 있습니다:

```bash
tree-sitter parse ./test/example.hbs
```

### 플레이그라운드 실행
대화형 플레이그라운드를 사용하여 문법을 테스트할 수 있습니다:

```bash
# WASM 빌드
tree-sitter build --wasm

# 플레이그라운드 실행
tree-sitter playground
```

## 지원되는 파일 형식

다음 확장자를 가진 파일들을 지원합니다:
- `.handlebars`
- `.hdbs`
- `.hbs`
- `.hjs`
- `.mst`
- `.mu`
- `.mustache`
- `.stache`
- `.html`

## 예제

다음은 지원되는 Handlebars 문법의 예제입니다:

```handlebars
<!DOCTYPE html>
<html>
<head>
  <title>{{title}}</title>
</head>
<body>
  <h1>{{name}}</h1>
  <p>{{description}}</p>

  {{#each items}}
    <div class="item">
      <h2>{{this.title}}</h2>
      <p>{{this.description}}</p>
      {{#if this.active}}
        <span class="active">Active</span>
      {{/if}}
    </div>
  {{/each}}

  {{!-- This is a comment --}}
  {{{rawContent}}}

  {{#unless empty}}
    <p>Not empty</p>
  {{/unless}}

  {{> partial param=value}}
</body>
</html>
```

## 라이선스

MIT License

