{
  description = "Development shell for deck-design-pro";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22

            git
            pkg-config
            python3
            vips
          ];

          shellHook = ''
            export npm_config_update_notifier=false
            export npm_config_fund=false
            export npm_config_audit=false

            echo "Node $(node --version) and npm $(npm --version) are available."
            echo "Run 'npm ci' to install package-lock dependencies, then 'npm run dev'."
          '';
        };
      }
    );
}
