import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingIcon from "@material-ui/icons/Settings";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { IconButton } from "@material-ui/core";

export const mainListItems = (
  <>
    {" "}
    <ListSubheader inset color="primary">
      <h3>MÓDULOS</h3>
    </ListSubheader>
    <ListItem>
      <PopupState variant="popper">
        {(popupState) => (
          <>
            <IconButton {...bindTrigger(popupState)}>
              <LayersIcon />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("você clicou")}
                >
                  Usuários
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Grupos de Acesso
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Modulos de Acesso
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Telas do Sistema
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Dispositivos
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
      <ListItemText primary="Controle de Acesso" />
    </ListItem>
    <ListItem>
      <PopupState variant="popper">
        {(popupState) => (
          <>
            <IconButton {...bindTrigger(popupState)}>
              <ShoppingCartIcon />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Pedidos do Ecommerce
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Clientes do Ecommerce
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Produtos
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Fotos dos Produtos
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Seções de Produtos
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Produtos Similares
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Produtos Correlacionados
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Slides
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Marcas de Produtos
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Depoimentos de Clientes
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Paginas Informativas
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Artigos do Blog
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Cupons de Desconto
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Estoques
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Tabela de Preços
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Taxas De Cartão
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
      <ListItemText primary="Ecommerce" />
    </ListItem>
    <ListItem>
      <PopupState variant="popper">
        {(popupState) => (
          <>
            <IconButton {...bindTrigger(popupState)}>
              <SettingIcon />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Empresas
                </Button>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                {" "}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.alert("Voce clicou")}
                >
                  Parâmetros
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
      <ListItemText primary="Configurações" />
    </ListItem>
  </>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Relatórios</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Mês atual" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Último quarto" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Final de ano" />
//     </ListItem>
//   </div>
// );
