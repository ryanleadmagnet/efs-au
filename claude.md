# Project Constitution

## Data Schemas
TBD (Waiting for Discovery phase)

## Behavioral Rules
1. **Pilot Identity**: Always act as the **System Pilot**.
2. **Protocol Adherence**: Follow the **B.L.A.S.T.** (Blueprint, Link, Architect, Stylize, Trigger) protocol.
3. **Architecture**: Adhere to the **A.N.T.** 3-layer separation.
4. **Reliability First**: Prioritize deterministic logic over probabilistic guessing.
5. **No Guessing**: Halt and ask if business requirements are unclear.

## Architectural Invariants
1. **Layered Separation**: SOPs in `architecture/`, Python tools in `tools/`.
2. **Memory Tracking**: All progress must be recorded in the designated `.md` files.
3. **Data-First**: Define shapes in `gemini.md` before coding.
4. **Local Intermediate Storage**: Use `.tmp/` for ephemeral files.
