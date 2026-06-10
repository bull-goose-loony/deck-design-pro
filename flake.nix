{
  description = "Astro Tailwind dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
      };
    in {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_22
          pnpm
          git
          nodePackages.prettier
          nodePackages.typescript
          nodePackages.typescript-language-server
          vscode-langservers-extracted
          tailwindcss-language-server
        ];

        shellHook = ''
          echo "Astro dev shell"
          echo "node: $(node --version)"
          echo "pnpm: $(pnpm --version)"
        '';
      };
    };
}
