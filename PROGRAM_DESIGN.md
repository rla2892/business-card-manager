# 요구 사항 분석

## 기능 요구 사항

- **명함 추가**: 이름, 회사, 직책, 전화번호, 이메일 등의 정보를 입력받아 명함을 추가합니다.
- **명함 삭제**: 특정 명함을 삭제합니다.
- **명함 검색**: 이름, 회사, 직책 등으로 명함을 검색합니다.
- **명함 수정**: 특정 명함의 정보를 수정합니다.
- **명함 목록 조회**: 저장된 모든 명함을 목록으로 조회합니다.
- **명함 저장/로드**: 명함 정보를 파일에 저장하거나, 저장된 파일을 불러옵니다.

## 비기능 요구 사항

- **CLI 환경에서 사용 가능해야 합니다.**
- **명함 정보는 JSON 파일 형식으로 저장됩니다.**
- **타입스크립트를 사용하여 모든 코드에 타입을 명확히 지정합니다.**

## 시스템 아키텍처 설계

### 클래스 및 인터페이스 정의

- **BusinessCard**: 명함 정보를 담는 클래스입니다.
  - **필드**: `name`, `company`, `title`, `phone`, `email` 등
  - **메서드**: 생성자, 정보 출력 메서드 등

- **BusinessCardManager**: 명함을 관리하는 클래스입니다.
  - **필드**: `cards` (명함의 배열)
  - **메서드**: `addCard()`, `removeCard()`, `findCard()`, `updateCard()`, `listCards()`, `saveToFile()`, `loadFromFile()` 등

- **CardCriteria**: 명함 검색 조건을 정의하는 인터페이스입니다.
  - **필드**: `name?`, `company?`, `title?` 등 (옵셔널 필드로 구성)

### 파일 구조

- src/
  - models/
    - BusinessCard.ts (명함 클래스 정의)
- services/
  - BusinessCardManager.ts (명함 관리 클래스 정의)
- interfaces/
  - CardCriteria.ts (검색 조건 인터페이스 정의)
- utils/
  - FileHandler.ts (파일 입출력 관련 유틸리티)
- main.ts (프로그램의 진입점, CLI 인터페이스 정의)
