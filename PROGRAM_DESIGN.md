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
```plaintext
- business-card-manager/
	- src/						# 소스 코드가 위치하는 폴더
		- models/				# 데이터 모델(클래스, 인터페이스) 정의
			- BusinessCard.ts	# 명함 클래스 정의
		- interfaces/			# TypeScript 인터페이스 정의
			- CardCriteria.ts	# 검색 조건 인터페이스 정의
			
		- services/				# 비즈니스 로직을 처리하는 서비스 계층
			- BusinessCardManager.ts	# 명함 관리 클래스 정의
		- utils/				# 유틸리티 함수, 헬퍼 함수
			- FileHandler.ts	# 파일 입출력 관련 유틸리티
		- commands/				# CLI 명령어를 처리하는 모듈
		- config/				# 설정 파일 (환경 설정, 설정 상수 등)
		- main.ts				# 프로그램의 진입점
	- tests/					# 테스트 파일
		- unit/					# 유닛 테스트
		- integration/			# 통합 테스트
	- dist/						# 빌드된 결과물이 위치하는 폴더 (일반적으로 컴파일된 JS 파일)
	- node_modules/				# npm 패키지들이 설치되는 디렉터리
	- .gitignore				# Git에서 추적하지 않을 파일/폴더 목록
	- package.json				# 프로젝트 메타데이터 및 의존성 정보
	- tsconfig.json				# TypeScript 컴파일러 설정 파일
	- .eslintrc.json			# ESLint 설정 파일
	- README.md					# 프로젝트 설명 파일
	- PROGRAM_DESIGN.md			# 프로그램 설계 문서
```